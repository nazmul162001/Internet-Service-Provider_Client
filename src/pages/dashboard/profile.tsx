import DashboardLayout from '@/components/Layouts/DashboardLayout'
import { Image } from 'antd'
import { ReactElement } from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { useGetProfileQuery } from '@/redux/feature/user/userApiSlice'
import Spinner from '@/components/spinner/Spinner'

const Profile = () => {
  const { data, error, isLoading } = useGetProfileQuery()

  if (isLoading) {
    return <Spinner />
  }

  // console.log(data?.data?)
  return (
    <section className='w-full h-full flex justify-center'>
      <div className='w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className=' w-full h-full md:h-96'>
          <div className='w-full h-full md:h-96 p-4 rounded-xl'>
            <Image
              // style={{borderRadius: '10px'}}
              className='rounded-lg w-full h-full'
              // width={400}
              src={
                data?.data?.profileImage
                  ? data?.data?.profileImage
                  : '/profile.png'
              }
            />
          </div>
        </div>
        <div className='flex mt-10 p-3'>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#112164]'>
              {data?.data?.name ? data?.data?.name : 'User-NetFX'}
            </h1>
            <p className=' text-[#6c757d] text-sm font-sans py-3 font-bold'>
              {data?.data?.email}
            </p>
            <p className=' text-[#6c757d] text-sm font-sans font-bold'>
              {data?.data?.phoneNumber
                ? data?.data?.phoneNumber
                : '+88017-xxxxxx'}
            </p>
            <br />
            <p className='text-[#6c757d]'>
              Role:{' '}
              <span className='px-3 py-1 uppercase bg-red-200 rounded'>
                {data?.data?.role}
              </span>
            </p>

            <div className=' flex flex-wrap items-center gap-2 my-8'>
              <span className='w-12 h-12 flex items-center p-2 bg-[#112164] text-white cursor-pointer rounded-full justify-center'>
                <FaFacebookSquare className='text-2xl' />{' '}
              </span>
              <span className='w-12 h-12 flex items-center p-2 bg-[#112164] text-white cursor-pointer rounded-full justify-center'>
                <AiFillInstagram className='text-2xl' />{' '}
              </span>
              <span className='w-12 h-12 flex items-center p-2 bg-[#112164] text-white cursor-pointer rounded-full justify-center'>
                <AiFillLinkedin className='text-2xl' />{' '}
              </span>
              <span className='w-12 h-12 flex items-center p-2 bg-[#112164] text-white cursor-pointer rounded-full justify-center'>
                <AiFillTwitterSquare className='text-2xl' />{' '}
              </span>
              <span className='w-12 h-12 flex items-center p-2 bg-[#112164] text-white cursor-pointer rounded-full justify-center'>
                <BsGithub className='text-2xl' />{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
