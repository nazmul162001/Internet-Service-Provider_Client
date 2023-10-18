import DashboardLayout from '@/components/Layouts/DashboardLayout'
import { ReactElement } from 'react'

const ManageFaq = () => {
  return (
    <section className='border-b-2 flex justify-between pb-2'>
      <h1 className='text-xl pb-2 text-[#112164] font-medium'>Manage FAQ</h1>

      <button
        // onClick={() => setModal3Open(true)}
        className='flex items-center px-5 py-2 bg-[#0d99e5] text-white hover:bg-[#112164] gap-2'
      >
        Add FAQ <span>{/* <BsPencil className='text-2xl' />{' '} */}</span>{' '}
      </button>
    </section>
  )
}

export default ManageFaq

ManageFaq.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
