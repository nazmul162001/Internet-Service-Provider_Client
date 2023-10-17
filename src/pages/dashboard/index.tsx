import { ReactElement } from 'react'
import DashboardLayout from '../../../components/Layouts/DashboardLayout'

const Dashboard = () => {
  return <div className='bg-white w-full'>wellcome to my dashboard</div>
}

export default Dashboard

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
