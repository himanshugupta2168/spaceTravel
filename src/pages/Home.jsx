import React from 'react';
import backgroundImage from '../Assets/home/background-home-desktop.jpg';

function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen relative w-full pt-[23%] pl-[10%] " 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='text-white flex flex-row items-center justify-between w-[80%]'>
        <div className='w-[444px]'>
          <h1 className=' font-Bellefair text-[150px]'>SPACE</h1>
          <p className='text-customSubHeading font-Barlow text-[18px]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='w-[274px] h-[274px] bg-white rounded-full flex justify-center items-center text-customBackGround font-Bellefair text-[32px] cursor-pointer'>
            EXPLORE
        </div>
      </div>
    </div>
  );
}

export default Home;
