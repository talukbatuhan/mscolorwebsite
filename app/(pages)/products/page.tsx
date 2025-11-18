import React from 'react'
import {MachineGrid} from '@/app/components/GlobalComponents/MachineGrid';

const page = () => {
  return (
          <div className="min-h-screen bg-[#182d51]">
            <MachineGrid showHero={false} />
          </div>
  );
}

export default page
