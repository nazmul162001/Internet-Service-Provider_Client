import DashboardLayout from "@/components/Layouts/DashboardLayout"
import { ReactElement } from "react"

const Booking = () => {
  return <div>My booking</div>
}

export default Booking

Booking.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
  }