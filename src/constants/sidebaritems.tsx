import type { MenuProps } from 'antd'
import { ProfileOutlined, TableOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { USER_ROLE } from './role'
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps['items'] = [
    {
      label: <Link href={`/dashboard/profile`}>My Profile</Link>,
      icon: <TableOutlined />,
      key: `/${role}/profile`,
    },
    {
      label: <Link href={`/dashboard/manage-profile`}>Manage Profile</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-profile`,
    },
  ]

  // common admin route
  const commonAdminSidebarItems: MenuProps['items'] = [
    {
      label: <Link href={`/dashboard/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
    {
      label: <Link href={`/dashboard/manage-service`}>Manage Service</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-service`,
    },
    {
      label: <Link href={`/dashboard/manage-booking`}>Manage Booking</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-booking`,
    },
    {
      label: 'Manage Content',
      key: 'management',
      icon: <TableOutlined />,
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
      icon: <TableOutlined />,
      key: `/dashboard/booking`,
    },
    {
      label: <Link href={`/dashboard/feedback`}>Feedback</Link>,
      icon: <TableOutlined />,
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
    {
      label: <Link href={`/dashboard/manage-admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/dashboard/manage-admin`,
    },
  ]

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems
  else if (role === USER_ROLE.USER) return userSidebarItems
  else {
    return defaultSidebarItems
  }
}
