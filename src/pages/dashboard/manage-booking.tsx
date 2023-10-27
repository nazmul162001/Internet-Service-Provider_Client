import DashboardLayout from '@/components/Layouts/DashboardLayout'
import DashboardLayoutRedux from '@/components/Layouts/DashboardLayoutRedux'
import { ReactElement } from 'react'
import { BiTrash } from 'react-icons/bi'
import { ImCheckmark2 } from 'react-icons/im'

const ManageBooking = () => {
  return (
    <div className='w-full h-full my-5 px-5'>
      <div className='mx-auto sm:px-8'>
        <div className=''>
          <div>
            <h1 className='text-center border-b-2 text-xl pb-2 text-[#112164] font-medium'>
              Manage Booking
            </h1>
          </div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Service
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Price
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Category
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                      Status
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100'></th>
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
                            Home Internet
                          </p>
                          <p className='text-gray-600 whitespace-no-wrap'>
                            Dhaka
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        $20,000
                      </p>
                      <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        Standard
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                        <span
                          aria-hidden
                          className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Pending</span>
                      </span>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-right'>
                      <button
                        type='button'
                        className='inline-block text-gray-500 hover:text-gray-700'
                      >
                        <div className='flex items-center gap-2'>
                          <BiTrash className='text-2xl hover:text-red-500' />
                          <ImCheckmark2 className='text-2xl hover:text-green-500' />
                        </div>
                      </button>
                    </td>
                  </tr>
                  {/* Repeat the above structure for additional rows */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageBooking

ManageBooking.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>
}
