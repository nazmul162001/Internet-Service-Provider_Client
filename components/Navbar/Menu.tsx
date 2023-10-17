import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from '@material-tailwind/react'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'
import { HiLogin } from 'react-icons/hi'
import { getAccessToken } from '@/redux/api/apiSlice'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant='circular'
          alt='tania andrew'
          className='cursor-pointer rounded-full'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdZ8dhbNQm38ifiEOyjzVbIrfMF7jsMy3UA&usqp=CAU'
        />
      </MenuHandler>

      <MenuList className='rounded mt-3 bg-[#0d99e5]  text-white w-52'>
        {/* menu item  */}

        <MenuItem className='flex items-center mb-3 gap-2 hover:bg-[#112164] py-2'>
          <span>
            <MdOutlineDashboardCustomize className='text-xl' />{' '}
          </span>
          <Typography variant='small' className='font-normal'>
            Dashboard
          </Typography>
        </MenuItem>

        <MenuItem className='flex items-center mb-3 gap-2 hover:bg-[#112164] py-2'>
          <span>
            <CgProfile className='text-xl' />{' '}
          </span>
          <Typography variant='small' className='font-normal'>
            My Profile
          </Typography>
        </MenuItem>

        <MenuItem className='flex items-center mb-3 gap-2 hover:bg-[#112164] py-2'>
          <span>
            <AiOutlineEdit className='text-xl' />{' '}
          </span>
          <Typography variant='small' className='font-normal'>
            Edit Profile
          </Typography>
        </MenuItem>

        {/* sign up button  */}
        <hr className='my-2 border-blue-gray-50' />
        {token ? (
          <MenuItem
            onClick={handleLogOut}
            className='flex items-center gap-2 hover:bg-red-400 py-3 '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5.636 5.636a9 9 0 1012.728 0M12 3v9'
              />
            </svg>
            <Typography variant='small' className='font-normal'>
              Sign Out
            </Typography>
          </MenuItem>
        ) : (
          <Link href='/auth/register'>
            <MenuItem className='flex items-center gap-2 hover:bg-red-400 py-3 '>
              <HiLogin className='text-2xl' />
              <Typography variant='small' className='font-normal'>
                Sign In
              </Typography>
            </MenuItem>
          </Link>
        )}
      </MenuList>
    </Menu>
  )
}
