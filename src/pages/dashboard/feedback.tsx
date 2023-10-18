import DashboardLayout from "@/components/Layouts/DashboardLayout"
import { ReactElement } from "react"

const Feedback = () => {
  return <div>user feedback</div>
}

export default Feedback

Feedback.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
  }