import React from 'react';
import FloatingNavDemo from '@/ui/FloatingNavDemo';
import { OrbitingCirclesDemo } from '@/ui/orbitintCirclesDemo';
import { StickyScrollRevealDemo } from '@/ui/Scroll-Item';
const Home = () => {
  return (
    <div className=' flex w-full  flex-col items-center justify-center'>
      <FloatingNavDemo />
      <OrbitingCirclesDemo/>
      <StickyScrollRevealDemo/>
    </div>
  );
};

export default Home;
