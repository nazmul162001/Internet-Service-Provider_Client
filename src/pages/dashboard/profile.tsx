import DashboardLayout from "@/components/Layouts/DashboardLayout"
import { ReactElement } from "react"

const Profile = () => {
  return <div>My Profile</div>
}

export default Profile

Profile.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
  }