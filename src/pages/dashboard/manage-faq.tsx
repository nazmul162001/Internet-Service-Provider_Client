import { ReactElement, useState } from 'react'
import ManageAccordion from '@/components/Accordion/ManageAccordion'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import { useForm, Controller } from 'react-hook-form'
import { Modal, Input } from 'antd'
const { TextArea } = Input
import { BsPencil } from 'react-icons/bs'
import { useAddFaqMutation } from '../../redux/feature/faq/faqApiSlice'
import { toast } from 'react-toastify'

const ManageFaq = () => {
  const [modal5Open, setModal5Open] = useState(false)

  const { handleSubmit, control, reset } = useForm()

  const [addFaq] = useAddFaqMutation()

  const onSubmit = async (data: any) => {
    try {
      // console.log(data)
      const response = await addFaq(data)
      toast.success('Service added to the cart', {
        position: 'top-right',
        autoClose: 3000,
      })
      window.location.reload()

      reset()
      setModal5Open(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='w-full h-full'>
      <div className='border-b-2 flex justify-between pb-2'>
        <h1 className='text-xl pb-2 text-[#112164] font-medium'>Manage FAQ</h1>

        <button
          onClick={() => setModal5Open(true)}
          className='flex items-center px-5 py-2 bg-[#0d99e5] text-white hover:bg-[#112164] gap-2'
        >
          Add FAQ{' '}
          <span>
            <BsPencil className='text-2xl' />
          </span>{' '}
        </button>

        <Modal
          title='Add FAQ'
          centered
          open={modal5Open}
          onOk={() => setModal5Open(false)}
          footer={null}
          onCancel={() => setModal5Open(false)}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className='text-gray-500' htmlFor='title'>
              Title
            </label>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <Input {...field} className='my-2' placeholder='Title' />
              )}
            />
            <label className='text-gray-500' htmlFor='description'>
              Description
            </label>
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  className='my-2'
                  placeholder='Description'
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              )}
            />
            <button
              type='submit'
              className='w-full py-1 bg-[#112164] text-white hover:bg-[#0d99e5]'
            >
              Add FAQ
            </button>
          </form>
        </Modal>
      </div>

      <div className='my-5'>
        <ManageAccordion />
      </div>
    </section>
  )
}

export default ManageFaq

ManageFaq.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
