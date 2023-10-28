import { CgProfile } from 'react-icons/cg'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { BiLogOut } from 'react-icons/bi'
import { getAccessToken } from '@/redux/api/apiSlice'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Avatar, Popover, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export function ProfileMenu() {
  const token = getAccessToken()
  const router = useRouter()
  
  const handleLogOut = () => {
    Swal.fire({
      title: 'Sign Out',
      text: 'Are you sure you want to sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, sign me out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('accessToken')
        router.push('/auth/register')
      }
    })
  }

  const handleDashboardClick = () => {
    if (token) {
      router.push('/dashboard/profile')
    } else {
      // Save the requested URL to cookies before redirecting to register
      Cookies.set('redirectTo', '/dashboard/profile')
      router.push('/auth/register')
    }
  }
  const handleEditProfileClick = () => {
    if (token) {
      router.push('/dashboard/manage-profile')
    } else {
      Cookies.set('redirectTo', '/dashboard/manage-profile')
      router.push('/auth/register')
    }
  }

  const content = (
    <div className='w-48 flex items-center'>
      <div className=''>
        <div
          onClick={handleDashboardClick}
          className='flex gap-2 items-center mb-3 cursor-pointer'
        >
          <span>
            <MdOutlineDashboardCustomize className='text-2xl' />{' '}
          </span>
          <span className='text-lg'>Dashboard</span>
        </div>

        {/* <div className='flex gap-2 items-center mb-3 cursor-pointer'>
          <span>
            <CgProfile className='text-2xl' />{' '}
          </span>
          <span className='text-lg'>My Profile</span>
        </div> */}

        <div
          onClick={handleEditProfileClick}
          className='flex gap-2 items-center mb-3 cursor-pointer'
        >
          <span>
            <AiOutlineEdit className='text-2xl' />{' '}
          </span>
          <span className='text-lg'>Edit Profile</span>
        </div>

        {/* signup / sign in button  */}
        <div className='my-8 border-t-2 border-gray-300'>
          {token ? (
            <div
              onClick={handleLogOut}
              className='flex gap-2 items-center pt-3 cursor-pointer'
            >
              <span>
                <BiLogOut className='text-2xl' />{' '}
              </span>
              <span className='text-lg'>Sign Out</span>
            </div>
          ) : (
            <div
              onClick={() => router.push('/auth/register')}
              className='flex gap-2 items-center pt-3 cursor-pointer'
            >
              <span>
                <BiLogIn className='text-2xl' />{' '}
              </span>
              <span className='text-lg'>Sign In</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Popover content={content} trigger='hover'>
        <Avatar size={50} icon={<UserOutlined />} />
      </Popover>
    </>
  )
}
