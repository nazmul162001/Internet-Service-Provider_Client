import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { Input } from 'antd'
import Image from 'next/image'
import { useGetServiceQuery } from '@/redux/feature/service/serviceApiSlice'

const { Search } = Input

const SearchBox = ({ open, setOpen }: any) => {
  const [searchValue, setSearchValue] = useState('')
  const customWidth = open
    ? 'transform translate-x-0'
    : 'transform -translate-y-[120%]'

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    console.log('Search Input:', value)
  }

  return (
    <>
      <div
        className={`w-full transition-all duration-300 h-screen fixed top-0 left-0 bg-white justify-center ${customWidth}  z-50 flex`}
      >
        <div className='w-full h-full'>
          {/* close icon  */}
          <span
            onClick={() => setOpen(!open)}
            className='absolute top-5 right-5'
          >
            <AiOutlineCloseCircle className='text-3xl hover:text-red-500' />
          </span>
          {/* search field  */}
          <div className='flex justify-center items-center relative top-10'>
            <Search
              onChange={handleSearchChange}
              placeholder='Search service...'
              allowClear
              className='w-1/2 '
            />

            {/* show result  */}
            <div className='w-full h-screen overflow-y-scroll no-scrollbar absolute top-10 left-0 flex justify-center'>
              <div className='w-1/2 h-full '>
                <div className='w-full h-32 border-b-2 mb-5 flex items-center gap-3'>
                  <div>
                    <Image
                      src='/bg.png'
                      width={100}
                      height={500}
                      alt='cart/image'
                    />
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <div>
                      <h3 className='text-[#6c757d]'>Product Name</h3>
                      <p className='text-sm font-sans text-[#6c757d]'>
                        Category: <span className='font-bold'>Standard</span>
                      </p>
                      <p className='text-sm font-sans text-[#6c757d] mb-3'>
                        Location: <span className='font-bold'>Dhaka</span>
                      </p>
                      <span className='px-5 rounded border-2 border-[#0d99e5] text-[#0d99e5]'>
                        $250
                      </span>
                    </div>
                    <div className='flex justify-center items-center'>
                      <button className='px-5 py-2 bg-[#112164] text-white rounded-none hover:bg-[#0d99e5] flex justify-center items-center gap-2'>
                        <span>Details</span>
                        <BsArrowRight className='text-xl' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBox
