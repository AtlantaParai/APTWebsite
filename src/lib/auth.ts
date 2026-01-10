export const authorizedUsers = [
  'ayyapps4u@gmail.com',
  'ipan85@gmail.com',
  'Divyaavino@gmail.com',
  'Bhuvanabuzzy@gmail.com',
  'sendabi@gmail.com',
  'sapmasi@gmail.com',
  'ramvijaianand@gmail.com',
  'Jeyaraj.L@gmail.com',
  'Amarjyotiangan@gmail.com',
  'dhaneshrajathurai@gmail.com',
  'Anbu.madhu@gmail.com',
  'chandruxg@gmail.com',
  'Visha.chandy@gmail.com',
  'fullbellyvrc@gmail.com'
];

export const attendanceUsers = [
  'ipan85@gmail.com',
  'Visha.chandy@gmail.com',
  'chandruxg@gmail.com',
  'Anbu.madhu@gmail.com',
  'sapmasi@gmail.com'
  // Add more emails here for users who should see attendance tab
];

export const financeUsers = [
  'ayyapps4u@gmail.com',
  'ipan85@gmail.com',
  'sapmasi@gmail.com',
  'Jeyaraj.L@gmail.com',
  'Chitty.anand@gmail.com'
  // Add more emails here for users who should see finance tab
];

export const isUserAuthorized = (email: string | null): boolean => {
  if (!email) return false;
  return authorizedUsers.includes(email.toLowerCase());
};

export const hasAttendanceAccess = (email: string | null): boolean => {
  if (!email) return false;
  return attendanceUsers.includes(email.toLowerCase());
};

export const hasFinanceAccess = (email: string | null): boolean => {
  if (!email) return false;
  return financeUsers.includes(email.toLowerCase());
};