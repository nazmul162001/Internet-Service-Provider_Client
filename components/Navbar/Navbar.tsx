import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCodeSquare } from 'react-icons/bs'
import { ProfileMenu } from './Menu'
import Image from 'next/image'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <section>
      {/* Navbar  */}
      <nav className=' w-full h-24 shadow-xl bg-white relative z-50'>
        <div className='flex justify-between items-center h-full w-full px-4 md:px-8 lg:px-10 2xl:px-16'>
          <div>
            <Link
              className='text-xl font-mono flex justify-center items-center gap-x-1'
              href='/'
            >
              <Image src='/logo.svg' width={150} height={40} alt='logo' />
            </Link>
          </div>
          <div className='hidden sm:flex'>
            {/* hidden sm-flex  */}
            <ul className=' hidden sm:flex'>
              <Link
                className='flex items-center text-[#8b827d] hover:text-black'
                href='/about'
              >
                <li className='ml-10 hover:border-b text-lg'>About Us</li>
              </Link>
              <Link
                className='flex items-center text-[#8b827d] hover:text-black'
                href='/blogs'
              >
                <li className='ml-10 hover:border-b text-lg'>Blogs</li>
              </Link>
              <Link
                className='flex items-center text-[#8b827d] hover:text-black'
                href='/contact'
              >
                <li className='ml-10 hover:border-b text-lg'>Contact Us</li>
              </Link>
            </ul>
            {/* Profile  */}
            <div className='ml-10 w-10'>
              <ProfileMenu />
            </div>
          </div>
          {/* menu Icon  */}
          <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
            <BiMenuAltLeft size={25} />
          </div>
        </div>
        {/* nav menu & close icon */}
        <div
          className={
            menuOpen
              ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500 h-screen'
          }
        >
          {/* menu close icon  */}
          <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>
          {/* mobile menu list  */}
          <div className='flex-col py-4'>
            <ul>
              <Link href='/about'>
                <li
                  className='py-4 cursor-pointer'
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </li>
              </Link>
              <Link href='/contact'>
                <li
                  className='py-4 cursor-pointer'
                  onClick={() => setMenuOpen(false)}
                >
                  contact
                </li>
              </Link>
              <Link href='/blogs'>
                <li
                  className='py-4 cursor-pointer'
                  onClick={() => setMenuOpen(false)}
                >
                  blogs
                </li>
              </Link>
              <Link href='/services'>
                <li
                  className='py-4 cursor-pointer'
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
