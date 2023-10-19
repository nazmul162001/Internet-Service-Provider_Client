import React, { useState, useEffect, ReactElement } from 'react'
import { Select } from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import type { SelectProps } from 'antd'
import { Input } from 'antd'
import RootLayout from '@/components/Layouts/RootLayouts'
import { useBookingMutation } from '../../../redux/feature/booking/bookingApiSlice'
const { TextArea } = Input
import { toast } from 'react-toastify'
import { useGetProfileQuery } from '@/redux/feature/user/userApiSlice'
import { useRouter } from 'next/router'
import { useGetSingleServiceQuery } from '@/redux/feature/service/serviceApiSlice'

const options = [
  { value: 'homeInternet', label: 'Wifi Internet' },
  { value: 'mobileTv', label: 'Mobile Connection' },
  { value: 'TvBox', label: 'Tv Box' },
  { value: 'smartHome', label: 'Smart Home' },
  { value: 'satelliteTv', label: 'Satellite TV' },
  { value: 'internet', label: 'Internet' },
  { value: 'broadband', label: 'Broadband' },
  { value: 'business', label: 'Business' },
]

const Booking = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()
  const { id } = router.query
  const { data: getSingleData } = useGetSingleServiceQuery(id)
  // console.log(getSingleData?.data?.price)

  const [booking] = useBookingMutation()
  const { data: profile } = useGetProfileQuery()
  const userId = profile?.data?.id
  const serviceId = getSingleData?.data?.id

  const onSubmit = async (data: any) => {
    const stringUserId = String(userId)
    const stringServiceId = String(serviceId)

    try {
      await booking({
        data: { ...data, userId: stringUserId, serviceId: stringServiceId },
      })
        .unwrap()
        .then((response: any) => {
          toast.success('Cart deleted successfully', {
            position: 'top-right',
            autoClose: 3000,
          })
          // console.log('RESPONSE', response)
          router.push('/dashboard/booking')
        })
    } catch (error) {
      console.log(error)
    }

    // console.log({data: {...data, serviceId:stringServiceId, userId:stringUserId}})
  }

  return (
    <section className='w-full h-screen my-10 px-5 flex justify-center'>
      <div className='w-full md:w-[95%] flex justify-center h-full bg-white '>
        <div className='w-full md:w-[60%]'>
          <div className='text-center py-4 border-b-2 border-gray-300'>
            <p className='text-lg'>
              Customer Registration Form (Internet Internet Service )for All
            </p>
            <p className='text-sm font-sans text-[#6c757d]'>
              (Fields with <span className='font-bold text-red-500'>*</span> are
              must required)
            </p>
          </div>
          {/* booking form  */}
          <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full h-full '>
              <div className='w-full grid grid-cols-12 mb-4'>
                <label className='grid col-span-4 items-center' htmlFor='name'>
                  <div className='font-sans font-medium '>
                    {' '}
                    Full Name{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Your Full Name'
                      />
                    )}
                  />
                </div>
              </div>

              <div className='w-full grid grid-cols-12 mb-4'>
                <label className='grid col-span-4 items-center' htmlFor='name'>
                  <div className='font-sans font-medium '>
                    Phone Number
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='phoneNumber'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Your Phone Number'
                      />
                    )}
                  />
                </div>
              </div>

              <div className='w-full grid grid-cols-12 mb-4'>
                <label
                  className='grid col-span-4 items-center'
                  htmlFor='email-address'
                >
                  <div className='font-sans font-medium '>
                    {' '}
                    Email Address{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='email'
                        placeholder='Your Email Address'
                      />
                    )}
                  />
                </div>
              </div>

              <div className='w-full grid grid-cols-12 mb-4'>
                <label
                  className='grid col-span-4 items-center'
                  htmlFor='district'
                >
                  <div className='font-sans font-medium '>
                    {' '}
                    District{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='district'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Your District'
                      />
                    )}
                  />
                </div>
              </div>

              <div className='w-full grid grid-cols-12 mb-4'>
                <label
                  className='grid col-span-4 items-center'
                  htmlFor='upazila'
                >
                  <div className='font-sans font-medium '>
                    {' '}
                    Upazila/Thana{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='thana'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Your Upazila'
                      />
                    )}
                  />
                </div>
              </div>

              <div className='w-full grid grid-cols-12 mb-4'>
                <label
                  className='grid col-span-4 items-center'
                  htmlFor='address'
                >
                  <div className='font-sans font-medium '>
                    {' '}
                    Address{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='address'
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        placeholder='Your Address'
                        autoSize={{ minRows: 3, maxRows: 5 }}
                      />
                    )}
                  />
                </div>
              </div>

              <div className='w-full grid grid-cols-12 mb-4'>
                <label
                  className='grid col-span-4 items-center'
                  htmlFor='package'
                >
                  <div className='font-sans font-medium '>
                    {' '}
                    Category/Package{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='category'
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={options}
                        placeholder='Select Your Service'
                        className='border-2 w-full border-gray-300'
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='w-full py-2 text-white my-5 bg-[#112164] hover-bg-[#0d99e5]'
              >
                Booking Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking

Booking.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>
}
