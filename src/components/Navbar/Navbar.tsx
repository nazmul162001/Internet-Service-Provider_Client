import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCodeSquare } from 'react-icons/bs'
import { ProfileMenu } from './Menu'
import Image from 'next/image'
import Search from './Search'
import Cart from './Cart/Cart'
import CartSidebar from './Cart/CartSidebar'
import { useGetCartQuery } from '@/redux/feature/cart/cartApiSlice'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <section>
      {/* Navbar  */}
      <nav className=' w-full h-24 shadow-xl bg-white relative z-50'>
        <div className='flex justify-between items-center h-full w-full px-4 md:px-8 lg:px-10 2xl:px-16'>
          {/* logo  */}
          <div className='flex order-2'>
            <Link
              className='text-xl font-mono flex justify-center items-center gap-x-1'
              href='/'
            >
              <Image src='/logo.svg' width={150} height={40} alt='logo' />
            </Link>
          </div>

          {/* menu  */}
          <div className='hidden sm:flex order-3'>
            {/* hidden sm-flex  */}
            <ul className=' hidden sm:flex'>
              <Link
                className='flex items-center text-[#8b827d] hover:text-black'
                href='/'
              >
                <li className='ml-10 hover:border-b text-sm md:text-lg'>
                  About Us
                </li>
              </Link>
              <Link
                className='flex items-center text-[#8b827d] hover:text-black'
                href='/'
              >
                <li className='ml-10 hover:border-b text-sm md:text-lg'>
                  Blogs
                </li>
              </Link>
              <Link
                className='flex items-center text-[#8b827d] hover:text-black mr-5'
                href='/'
              >
                <li className='ml-10 hover:border-b text-sm md:text-lg'>
                  Contact Us
                </li>
              </Link>
              {/* search component  */}
              <div className='flex justify-center items-center gap-3'>
                <Search />
                <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
              </div>
            </ul>
            {/* Profile  */}
            <div className='ml-10 w-10'>
              <ProfileMenu />
            </div>
          </div>

          {/* menu Icon  */}
          <div
            className='sm:hidden cursor-pointer flex justify-center items-center'
            onClick={handleNav}
          >
            <BiMenuAltLeft size={40} />
          </div>

          <div className='ml-10 w-10 flex sm:hidden order-2'>
            <ProfileMenu />
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
            <div className='w-full flex justify-evenly items-center gap-2 border-t-2 border-gray-500 mt-3 pt-3'>
              <div className='flex justify-center items-center'>
                <Search />
              </div>
              <div>
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* cart sidebar  */}
      <CartSidebar cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </section>
  )
}

export default Navbar
