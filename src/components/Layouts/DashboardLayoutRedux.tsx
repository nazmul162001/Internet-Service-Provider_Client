import { ReactNode } from 'react'
import DashboardLayout from './DashboardLayout'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
const DashboardLayoutRedux = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <DashboardLayout>{children}</DashboardLayout>
    </Provider>
  )
}

export default DashboardLayoutRedux
