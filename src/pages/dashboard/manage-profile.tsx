import DashboardLayout from '@/components/Layouts/DashboardLayout'
import { ReactElement } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import type { SelectProps } from 'antd'
import { Input } from 'antd'

const ManageProfile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='w-2/3'>
        <h1 className='text-center border-b-2 text-xl pb-2 text-[#112164] font-medium'>
          Update Profile Information
        </h1>

        {/* profile update form  */}
        <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full h-full '>
            <div className='w-full grid grid-cols-12 mb-4'>
              <label
                className='grid col-span-4 items-center'
                htmlFor='name'
              >
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
              <label
                className='grid col-span-4 items-center'
                htmlFor='phoneNumber'
              >
                <div className='font-sans font-medium '>
                  {' '}
                  Phone Number{' '}
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
                htmlFor='email'
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
              <label className='grid col-span-4 items-center' htmlFor='profileImage'>
                <div className='font-sans font-medium '>
                  {' '}
                  Image URL{' '}
                  <span className='font-bold text-red-500 text-lg'>*</span>
                </div>
              </label>
              <div className='col-span-8'>
                <Controller
                  name='profileImage'
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className='border-2 w-full py-2 px-2 border-gray-300'
                      type='text'
                      placeholder='image url'
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
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ManageProfile

ManageProfile.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
