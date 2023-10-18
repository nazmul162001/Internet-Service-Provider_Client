import DashboardLayout from '@/components/Layouts/DashboardLayout'
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '@/redux/feature/user/userApiSlice'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { useForm, Controller } from 'react-hook-form'

const ManageProfile = () => {
  const { data: userProfile } = useGetProfileQuery()
  const [updateProfile] = useUpdateProfileMutation()
  const id = userProfile?.data?.id
  // console.log(userProfile?.data?.profileImage)
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (profileData: any) => {
    try {
      // Pass the updated profile data to the mutation
      const response = await updateProfile({
        id, // Provide the user ID
        ...profileData, // Pass updated profile data
      }).unwrap()
      router.push('/dashboard/profile')
      // console.log('Profile updated successfully:', response)
    } catch (error) {
      console.error('Error updating profile:', error)
    }
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
              <label className='grid col-span-4 items-center' htmlFor='email'>
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
                htmlFor='profileImage'
              >
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
