import { BsPencil } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import React, { ReactElement, useState } from 'react'
import { Modal, Input } from 'antd'
const { TextArea } = Input
import { useForm, Controller } from 'react-hook-form'
import {
  useDeleteFaqMutation,
  useGetFaqQuery,
  useUpdateFaqMutation,
} from '@/redux/feature/faq/faqApiSlice'
import { toast } from 'react-toastify'

const ManageAccordion = () => {
  const { data: faqs } = useGetFaqQuery({})

  const handleAccordionClick = (accordionId: any) => {
    alert(`Accordion ID: ${accordionId}`)
  }

  const [updateFaq] = useUpdateFaqMutation()
  const [deleteFaq] = useDeleteFaqMutation()

  const [modal5Open, setModal5Open] = useState(false)
  const { handleSubmit, control, reset } = useForm()

  const onEditClick = (faq: any) => {
    // Pre-populate the form with the FAQ's data
    reset(faq)
    setModal5Open(true)
  }

  // handle delete FAQ 

  const handleDeleteClick = async (id: any) => {
    try {
      const response = await deleteFaq(id).unwrap()
      toast.success('Delete FAQ successful', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      // window.location.reload()
    } catch (error) {
      console.error('Error deleting FAQ:', error)
    }
  }

  // handle update FAQ 
  
  const onSubmit = async (data: any) => {
    try {
      const updatedFaq = await updateFaq(data).unwrap()
      toast.success('Update FAQ successful', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      reset()
      setModal5Open(false)
      // window.location.reload()
    } catch (error) {
      console.error('Error updating FAQ:', error)
    }
  }

  return (
    <div id='wrapper' className='custom_accordion'>
      <ul>
        {faqs?.data?.map((accordion: any) => (
          <li key={accordion?.id} className='relative'>
            <input type='checkbox' defaultChecked />
            <i></i>
            <h2>
              {accordion.title}
              <span className='flex items-center gap-2 absolute top-8 right-16 z-50'>
                <BsPencil
                  onClick={() => onEditClick(accordion)}
                  className='hover:text-green-500'
                />
                <BiTrash
                  onClick={() => handleDeleteClick(accordion?.id)}
                  className='hover:text-red-500'
                />
              </span>
            </h2>
            <p>{accordion.description}</p>
            <Modal
              title='Edit FAQ'
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
                  Update FAQ
                </button>
              </form>
            </Modal>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ManageAccordion
