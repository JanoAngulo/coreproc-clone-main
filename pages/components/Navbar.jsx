import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  let [open, setOpen] = useState(false)

  return (
    <div className={`grid bg-darkblue-100 md:h-[78px] md:py-0 h-auto py-5 box-container  ${open ? ' shadow-none' : ' md:shadow-none shadow-lg transition-all duration-150 '} `}>
      <div className="self-center px-0 lg:px-7">
        <div className="flex justify-between md:flex">

          <NextLink href="/#" scroll={true}>
            <a className="grid self-center ">
              <img alt="CoreProc Logo" className="cursor-pointer" src="/Assets/Images/coreproc-logo.png" />
            </a>
          </NextLink>

          <div onClick={() => setOpen(!open)} className="absolute grid self-center w-6 h-auto text-6xl text-white cursor-pointer right-5 md:hidden">
            <FontAwesomeIcon className="w-6 h-full" icon={open ? faXmark : faBars} />
          </div>

          <div className="self-center md:grid ">
            <div className={`nav-link md:flex absolute md:static grid bg-darkblue-100 md:z-auto z-[-1] left-0 w-full transition-all duration-500 ease-in-out  ${open ? 'top-[80px]	md:drop-shadow-none drop-shadow-xl' : 'top-[-480px]'} `}>
              <div className="px-5 my-3 md:p-0">

                <NextLink href="/#WhatWeDo" scroll={false}>
                  <a onClick={() => setOpen(!open)} initial={{ y: 0 }} className="font-bold cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow font-Lato">
                    <motion.div whileHover={{ y: -4 }}>What we do</motion.div>
                  </a>
                </NextLink>
              </div>

              <div className="px-5 my-3 md:p-0">
                <NextLink href="/#SuccessStories" scroll={false}>
                  <a onClick={() => setOpen(!open)} initial={{ y: 0 }} className="font-bold cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow font-Lato">
                    <motion.div whileHover={{ y: -4 }}>Sucess Stories</motion.div>
                  </a>
                </NextLink>
              </div>

              <div className="px-5 my-3 md:p-0">
                <NextLink href="/#Clients" scroll={false}>
                  <a onClick={() => setOpen(!open)} initial={{ y: 0 }} className="font-bold cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow font-Lato">
                    <motion.div whileHover={{ y: -4 }}>Clients</motion.div>
                  </a>
                </NextLink>
              </div>

              <div className="px-5 my-3 md:p-0">
                <NextLink href="/components/ContactUs">
                  <a onClick={() => setOpen(!open)} initial={{ y: 0 }} className="font-bold cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow font-Lato">
                    <motion.div whileHover={{ y: -4 }}>Contact Us</motion.div>
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
