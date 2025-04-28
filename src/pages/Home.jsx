import React from 'react'
import avatar from "../assets/avatar.png";


const home = () => {
  return (
    <div>
        <div className="mx-8 font-['Poppins']">
        <p className='mt-10 text-2xl font-["Poppins"]'>Hello, I'm Manan,</p>
        <p className='mt-5 text-5xl font-["Poppins"] text-[#a6bbcc] font-extrabold'>Full stack Developer</p>
        <p className="mt-5 text-xl underline decoration-[#a6bbcc] underline-offset-4">Contact Me</p>
        <img className="mt-5 h-75 w-80" src={avatar} alt="Avatar" />
      </div>
    </div>
  )
}

export default home