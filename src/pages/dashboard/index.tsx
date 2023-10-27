import DashboardLayout from '@/components/Layouts/DashboardLayout'
import DashboardLayoutRedux from '@/components/Layouts/DashboardLayoutRedux'
import { ReactElement } from 'react'

const Dashboard = () => {
  return <div className='bg-white w-full'>wellcome to my dashboard</div>
}

export default Dashboard

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>
}
