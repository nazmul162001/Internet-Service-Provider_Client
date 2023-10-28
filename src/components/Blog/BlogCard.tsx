import { useState } from 'react'
import { Modal, Input } from 'antd'
const { TextArea } = Input
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} from '@/redux/feature/blog/blogApiSlice'
import { EditOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
const { Meta } = Card
import { BiTrash } from 'react-icons/bi'
const BlogCard = ({ blog }: any) => {
    const id = blog?.id
    // console.log(id)
  const [modal8Open, setModal8Open] = useState(false)
  const { handleSubmit, control, reset } = useForm()
  const [updateBlog] = useUpdateBlogMutation()
  const [deleteBlog] = useDeleteBlogMutation()

  const handleDeleteBlog = async (id: any) => {
    try {
      const response = await deleteBlog(id).unwrap()
      toast.success('Blog Delete Successfully', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      // window.location.reload()
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  const onSubmit = async (data: any) => {
    try {
      // console.log(data)
      const response = await updateBlog({id, data}).unwrap()
      toast.success('Blog added Successfully', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      // window.location.reload()

      reset()
      setModal8Open(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal
        title='Update Blog'
        centered
        open={modal8Open}
        onOk={() => setModal8Open(false)}
        footer={null}
        onCancel={() => setModal8Open(false)}
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
          <label className='text-gray-500' htmlFor='name'>
            Name
          </label>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Input {...field} className='my-2' placeholder='Name' />
            )}
          />
          <label className='text-gray-500' htmlFor='images'>
            Images
          </label>
          <Controller
            name='images'
            control={control}
            render={({ field }) => (
              <Input {...field} className='my-2' placeholder='Images' />
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
            Update Blog
          </button>
        </form>
      </Modal>
      <Card
        className='custom__card'
        style={{ width: 300 }}
        cover={
          <img
            alt='example'
            src={
              blog?.images
                ? blog?.images
                : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            }
          />
        }
        actions={[
          <BiTrash onClick={() => handleDeleteBlog(blog?.id)} key='delete' />,
          <EditOutlined onClick={() => setModal8Open(true)} key='edit' />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
          }
          title={blog?.title}
          description={blog?.description}
        />
      </Card>
    </>
  )
}

export default BlogCard
