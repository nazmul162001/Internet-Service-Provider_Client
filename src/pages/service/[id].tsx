import React from 'react'
import { ReactElement, useEffect } from 'react'
import RootLayout from '../../../components/Layouts/RootLayouts'
import Image from 'next/image'
import PrimaryButton from '../../../components/Button/PrimaryButton'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Review from '../../../components/review/review'

const ServiceDetails = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Description',
      children: 'This is the description of the service',
    },
    {
      key: '2',
      label: 'Review',
      children: <Review />,
    },
  ]

  return (
    <section className='overflow-hidden bg-white py-11 font-poppins'>
      <div className='max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 md:w-1/2 '>
            <div className='sticky top-0 z-50 overflow-hidden '>
              <div className='relative mb-6 lg:mb-10 lg:h-2/4 '>
                <Image
                  alt='image/'
                  width={100}
                  height={100}
                  src='/bg.png'
                  className='h-[60vh] w-full rounded'
                />
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 '>
            <div className='lg:pl-20'>
              <div className='mb-8 '>
                <span className='text-lg font-medium text-rose-500 dark:text-rose-200'>
                  New
                </span>
                <h2 className='max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl'>
                  Standard
                </h2>
                <div className='flex items-center mb-6'>
                  <ul className='flex mr-2'>
                    <li>rating here</li>
                  </ul>
                  <p className='text-xs dark:text-gray-400 '>
                    (2 customer reviews)
                  </p>
                </div>
                <p className='max-w-md mb-8 text-gray-700 dark:text-gray-400'>
                  Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                  Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                  Lorem ispum dor amet Lorem ispum dor amet
                </p>
                <p className='inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 '>
                  <span>$1000.99</span>
                  <span className='text-base font-normal text-gray-500 line-through dark:text-gray-400'>
                    $1500.99
                  </span>
                </p>
              </div>
              <div className='flex flex-wrap justify-center md:justify-normal items-center gap-2 '>
                <PrimaryButton title='Booking' bgColor='bg_two' />
                <PrimaryButton title='Add To Cart' bgColor='bg_one' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tab / descriptiom, review  */}
      <Tabs defaultActiveKey='1' items={items} />
    </section>
  )
}

export default ServiceDetails

ServiceDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>
}
