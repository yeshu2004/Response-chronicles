import React from 'react'
import { FaGooglePlay } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='px-10 py-5 fixed top-0 w-full text-[#B3EB16]'>
      <div className='uppercase flex items-center justify-between'>
        <a to='/' className='font-[Humane] text-7xl'>Response chronicles</a>
        <div className='flex items-center gap-2'>
            <a href="" className='border-[1px] rounded-full px-5 py-[1vh] text-sm border-[#B3EB16] flex items-center gap-2'><span><FaGooglePlay/></span>download now</a>
            <a href="" className='border-[1px] rounded-full px-5 py-[1vh] text-sm border-[#B3EB16] flex items-center gap-2'><span><IoGameController/></span>play online</a>
        </div>
      </div>
    </div>
  )
}

export default Nav