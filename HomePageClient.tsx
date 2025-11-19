// app/HomePageClient.tsx
'use client'; 

import { MachineGrid } from '@/app/components/GlobalComponents/MachineGrid';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#193770]">
      <MachineGrid showHero={true} />
    </div>
  );
}