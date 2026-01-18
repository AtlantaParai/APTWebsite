import { MembersSheetsService } from './members-sheets-service';

export const isUserAuthorized = async (email: string | null, accessToken?: string): Promise<boolean> => {
  if (!email) return false;
  
  console.log('Checking authorization for:', email);
  
  if (!accessToken) {
    console.warn('No access token available for authorization check');
    return false;
  }
  
  try {
    const emails = await MembersSheetsService.getAuthorizedEmails(accessToken);
    const isAuthorized = emails.includes(email.toLowerCase());
    console.log('Authorization result:', { email, isAuthorized, availableEmails: emails });
    return isAuthorized;
  } catch (error) {
    console.error('Failed to fetch authorized users from sheet:', error);
    return false;
  }
};

export const hasAttendanceAccess = async (email: string | null, accessToken?: string): Promise<boolean> => {
  if (!email) return false;
  
  if (!accessToken) {
    console.warn('No access token for attendance check');
    return false;
  }
  
  try {
    const permissions = await MembersSheetsService.getMemberPermissions(accessToken);
    return permissions.attendanceEmails.includes(email.toLowerCase());
  } catch (error) {
    console.error('Failed to check attendance access:', error);
    return false;
  }
};

export const hasFinanceAccess = async (email: string | null, accessToken?: string): Promise<boolean> => {
  if (!email) return false;
  
  if (!accessToken) {
    console.warn('No access token for finance check');
    return false;
  }
  
  try {
    const permissions = await MembersSheetsService.getMemberPermissions(accessToken);
    return permissions.financeEmails.includes(email.toLowerCase());
  } catch (error) {
    console.error('Failed to check finance access:', error);
    return false;
  }
};