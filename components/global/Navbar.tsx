import { VaspLogo } from '@/constants/svg';
import Link from 'next/link';
import { List, XCircle } from "@phosphor-icons/react";
import React, { useState } from 'react'
import Image from 'next/image';

const Navbarr = () => {

  return (
    <div className="">
      <div className="flex justify-between items-center p-3 text-white">
        <div className=" w-auto flex items-center">
        <Image src={VaspLogo} alt="atlas-logo" className="w-auto" />
        </div>
        <div className="block lg:hidden">
          <List
            size={32}
            color="#b8b8b8"
            weight="fill"
            className="block lg:hidden"
            
          />
        </div>
        <div
          className="hidden top-0 left-0 right-0 sm:block bg-[#15191C] p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
          
        >
          <XCircle
            size={32}
            color="#b8b8b8"
            weight="fill"
            
          />
          <ul className="flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto">
            <a
              href="#Home"

              className="my-2 mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer "
            >
              Home
            </a>
            <a

              className="my-2 mx-1 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer "
            >
              About Us
            </a>
            <a className="my-2 mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer ">
              Services
            </a>
            <a className="my-2 mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer ">
              Blog
            </a>
            <a className="my-2 mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer ">
              Contact Us
            </a>
          </ul>
        </div>

        <div className="hidden lg:flex items-center">
          <ul className=" flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto">
            <li
              
              className="mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer "
            >
              Home
            </li>
            <a

              className="mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer "
            >
              About Us
            </a>
            <li

              className="mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer "
            >
              Services
            </li>
            <li
              className="mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer "
            >
              Blog
            </li>
            <li
              className="mx-2 w-[100%] min-w-[100px] hover:text-[#218B53] hover:cursor-pointer "
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="/register"
            className="py-3 px-6 border border-[#218B53] rounded-full text-[#218B53] hover:cursor-pointer hover:bg-[#218B53] hover:text-white"
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbarr