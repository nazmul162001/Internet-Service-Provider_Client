import DashboardLayout from '@/components/Layouts/DashboardLayout'
import { ReactElement } from 'react'

const ManageUser = () => {
  return <div>Manage user</div>
}

export default ManageUser

ManageUser.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
