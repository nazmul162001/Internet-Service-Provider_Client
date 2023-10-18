import DashboardLayout from '@/components/Layouts/DashboardLayout'
import { ReactElement, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { Modal, Input, Select } from 'antd'
const { TextArea } = Input

const ManageUser = () => {
  const [modal2Open, setModal2Open] = useState(false)

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value)
  }

  return (
    <div className='w-full h-full my-5 px-5'>
      <div className='mx-auto sm:px-8'>
        <div className=''>
          <div>
            <h1 className='text-center border-b-2 text-xl pb-2 text-[#112164] font-medium'>
              Manage User
            </h1>
          </div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      User Name
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Contact
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Role
                    </th>
                    <th className='py-3 border-b-2 border-gray-200 bg-gray-100'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <div className='flex'>
                        <div className='flex-shrink-0 w-10 h-10'>
                          <img
                            className='w-full h-full rounded-full'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                            alt=''
                          />
                        </div>
                        <div className='ml-3'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            Nazmul Hassan
                          </p>
                          <p className='text-gray-600 whitespace-no-wrap'>
                            nazmul@gmail.como
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        01789141408
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                        <span
                          aria-hidden
                          className='absolute inset-0 opacity-50 rounded-full'
                        ></span>
                        <Select
                          labelInValue
                          defaultValue={{ value: 'user', label: 'User' }}
                          style={{ width: 120 }}
                          onChange={handleChange}
                          options={[
                            {
                              value: 'user',
                              label: 'User',
                            },
                            {
                              value: 'admin',
                              label: 'Admin',
                            },
                          ]}
                        />
                      </span>
                    </td>
                    <td className='py-5 border-b border-gray-200 bg-white text-sm text-right'>
                      <button
                        type='button'
                        className=' text-gray-500 hover:text-gray-700 flex items-center gap-3'
                      >
                        <BiTrash className='text-2xl hover:text-red-500' />
                        <BsPencil
                          onClick={() => setModal2Open(true)}
                          className='text-2xl hover:text-green-500'
                        />
                        <Modal
                          title='Update User Profile'
                          centered
                          open={modal2Open}
                          onOk={() => setModal2Open(false)}
                          footer={null}
                          onCancel={() => setModal2Open(false)}
                        >
                          <label className='text-gray-500' htmlFor='name'>
                            Name
                          </label>
                          <Input className='my-2' placeholder='Updated Name' />
                          <label className='text-gray-500' htmlFor='email'>
                            Email
                          </label>
                          <Input className='my-2' placeholder='Updated Email' />

                          <label
                            className='text-gray-500'
                            htmlFor='phoneNumber'
                          >
                            Phone Number
                          </label>
                          <Input
                            className='my-2'
                            placeholder='Updated PhoneNumber'
                          />

                          <label
                            className='text-gray-500'
                            htmlFor='profileImage'
                          >
                            Image URL
                          </label>
                          <Input className='my-2' placeholder='profileImage' />

                          <div className='w-full h-full my-3'>
                            <button className='bg-[#112164] w-full text-white py-2'>
                              Update User Profile
                            </button>
                          </div>
                        </Modal>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageUser

ManageUser.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
