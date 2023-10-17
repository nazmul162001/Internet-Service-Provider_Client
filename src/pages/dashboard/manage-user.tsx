import { ReactElement } from 'react'
import DashboardLayout from '../../../components/Layouts/DashboardLayout'

const ManageUser = () => {
  return <div>Manage user</div>
}

export default ManageUser

ManageUser.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
