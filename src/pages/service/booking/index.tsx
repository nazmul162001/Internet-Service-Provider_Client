import React, { ReactElement } from 'react'
import { Select } from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import type { SelectProps } from 'antd'
import { Input } from 'antd'
import RootLayout from '@/components/Layouts/RootLayouts'
const { TextArea } = Input

const options = [
  { value: 'Home Internet', label: 'Home Internet' },
  { value: 'Home Internet2', label: 'Home Internet2' },
  { value: 'Home Internet3', label: 'Home Internet3' },
  { value: 'Home Internet4', label: 'Home Internet4' },
  { value: 'Home Internet5', label: 'Home Internet5' },
  { value: 'Home Internet6', label: 'Home Internet6' },
  { value: 'Home Internet7', label: 'Home Internet7' },
  { value: 'Home Internet8', label: 'Home Internet8' },
]

const Booking = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
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
                <label
                  className='grid col-span-4 items-center'
                  htmlFor='full-name'
                >
                  <div className='font-sans font-medium '>
                    {' '}
                    Full Name{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='full_name'
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
                <label
                  className='grid col-span-4 items-center'
                  htmlFor='phone-number'
                >
                  <div className='font-sans font-medium '>
                    {' '}
                    Phone Number{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='phone_number'
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
                    name='email_address'
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
                    name='upazila'
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
                    Package{' '}
                    <span className='font-bold text-red-500 text-lg'>*</span>
                  </div>
                </label>
                <div className='col-span-8'>
                  <Controller
                    name='package'
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
