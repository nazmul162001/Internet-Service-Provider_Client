import type { MenuProps } from 'antd'
import { BiUserCircle } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'
import { BsDatabaseGear } from 'react-icons/bs'
import { LuListOrdered } from 'react-icons/lu'
import { BiBookContent } from 'react-icons/bi'
import { MdManageAccounts } from 'react-icons/md'
import { RiLuggageCartFill } from 'react-icons/ri'
import { FcFeedback } from 'react-icons/fc'
import { BsPersonFillGear } from 'react-icons/bs'
import Link from 'next/link'
export const sidebarItems = (role: string) => {
  

  const defaultSidebarItems: MenuProps['items'] = [
    {
      label: <Link href={`/dashboard/profile`}>My Profile</Link>,
      icon: <BiUserCircle />,
      key: `/${role}/profile`,
    },
    {
      label: <Link href={`/dashboard/manage-profile`}>Manage Profile</Link>,
      icon: <MdManageAccounts />,
      key: `/${role}/manage-profile`,
    },
  ]

  // common admin route
  const commonAdminSidebarItems: MenuProps['items'] = [
    {
      label: <Link href={`/dashboard/manage-user`}>Manage User</Link>,
      icon: <MdMiscellaneousServices />,
      key: `/${role}/manage-user`,
    },
    {
      label: <Link href={`/dashboard/manage-service`}>Manage Service</Link>,
      icon: <BsDatabaseGear />,
      key: `/${role}/manage-service`,
    },
    {
      label: <Link href={`/dashboard/manage-booking`}>Manage Booking</Link>,
      icon: <LuListOrdered />,
      key: `/${role}/manage-booking`,
    },
    {
      label: 'Manage Content',
      key: 'management',
      icon: <BiBookContent />,
      children: [
        {
          label: <Link href={`/dashboard/manage-blog`}>Blog</Link>,
          key: `/${role}/manage-blog`,
        },
        {
          label: <Link href={`/dashboard/manage-faq`}>FAQ</Link>,
          key: `/${role}/manage-faq`,
        },
      ],
    },
  ]

  // user route

  const userSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/dashboard/booking`}>My Booking</Link>,
      icon: <RiLuggageCartFill />,
      key: `/dashboard/booking`,
    },
    {
      label: <Link href={`/dashboard/feedback`}>Feedback</Link>,
      icon: <FcFeedback />,
      key: `/dashboard/feedback`,
    },
  ]

  // admin route

  const adminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
  ]

  // Super admin route

  const superAdminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    // {
    //   label: <Link href={`/dashboard/manage-admin`}>Manage Admin</Link>,
    //   icon: <BsPersonFillGear />,
    //   key: `/dashboard/manage-admin`,
    // },
  ]

  if (role === 'super_admin') return superAdminSidebarItems
  else if (role === 'admin') return adminSidebarItems
  else if (role === 'user') return userSidebarItems
  else {
    return defaultSidebarItems
  }
}
