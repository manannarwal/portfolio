import React from 'react'
import avatar from "../assets/Avatar.jpg";
import resume from "../assets/Resume.pdf";

const Home = () => {
  const openResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div>
        <div className="mx-8 font-['Poppins'] md:mt-10 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <p className='mt-10 text-2xl md:text-xl lg:text-2xl font-["Poppins"]'>Hello, I'm Manan,</p>
            <p className='mt-5 text-5xl md:text-4xl lg:text-5xl font-["Poppins"] text-[#a6bbcc] font-extrabold'>Full stack Developer</p>
            <button 
              className="mt-5 text-xl md:text-base lg:text-xl underline decoration-[#a6bbcc] underline-offset-4 cursor-pointer"
              onClick={openResume}
            >Resume</button>
          </div>
          <div className="md:w-1/2 md:flex md:justify-end">
            <img className="mt-5 rounded-[35px] md:mt-0 h-75 w-80 md:h-96 md:w-auto lg:h-[30rem]" src={avatar} alt="Avatar" />
          </div>
        </div>
    </div>
  )
}

export default Home