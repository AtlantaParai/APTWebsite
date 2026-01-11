'use client';

import InstrumentStatus from '@/components/InstrumentStatus';
import Navigation from '@/components/Navigation';
import { instruments } from '@/data/instruments';
import { useAuth } from '@/contexts/AuthContext';

export default function InstrumentsPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </main>
    );
  }

  if (!user) {
    const basePath = process.env.NODE_ENV === 'production' ? '/APTWebsite' : '';
    window.location.href = basePath + '/';
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      <InstrumentStatus initialInstruments={instruments} />
    </main>
  );
}