'use client';

// Süslü parantez ile import edin (named export)
import { MachineGrid } from '@/app/components/GlobalComponents/MachineGrid';
// veya dosya yapınıza göre:
// import { MachineGrid } from '@/components/MachineGrid';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#193770]">
      <MachineGrid showHero={true} />
    </div>
  );
}