import ManageWhatWeDoCart from '@/components/HomePage/WhatWeDo/ManageWhatWeDoCart'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import React, { useState } from 'react'
import { ReactElement } from 'react'
import { BsPencil } from 'react-icons/bs'
import { Modal, Input, Select, Row, Col } from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  useCreateServiceMutation,
  useGetServiceQuery,
} from '@/redux/feature/service/serviceApiSlice'
import { toast } from 'react-toastify'
import DashboardLayoutRedux from '@/components/Layouts/DashboardLayoutRedux'

const ManageService = () => {
  const [modal2Open, setModal2Open] = useState(false)
  const [createService, { isLoading }] = useCreateServiceMutation()
  const { data: services } = useGetServiceQuery({})
  // console.log(service?.data)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price)
    data.connectionCost = parseInt(data.connectionCost)

    // console.log(data)
    await createService(data)
      .unwrap()
      .then((data) => {
        toast.success('Service Created', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
        setModal2Open(!modal2Open)
        // window.location.reload()
      })
      .catch((error) => {
        console.error('Service Create Error:', error)
      })
  }

  return (
    <div className='w-full h-full'>
      <div className='flex justify-between'>
        <h1 className='border-b-2 text-xl pb-2 text-[#112164] font-medium'>
          Manage Service
        </h1>
        <button
          onClick={() => setModal2Open(true)}
          className='flex items-center px-5 py-2 bg-[#0d99e5] text-white hover:bg-[#112164] gap-2'
        >
          Add Service{' '}
          <span>
            <BsPencil className='text-2xl' />{' '}
          </span>{' '}
        </button>
        <Modal
          title='Add Service'
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          footer={null}
          onCancel={() => setModal2Open(false)}
        >
          <div className='w-full h-full'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row gutter={16}>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='name'>
                    Name
                  </label>
                  <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Updated Name'
                      />
                    )}
                  />
                </Col>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='price'>
                    Price
                  </label>
                  <Controller
                    name='price'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='number'
                        placeholder='Updated Price'
                      />
                    )}
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='category'>
                    Category
                  </label>
                  <Controller
                    name='category'
                    control={control}
                    defaultValue='wifiInternet'
                    render={({ field }) => (
                      <Select
                        {...field}
                        className='my-2'
                        style={{ width: '100%' }}
                        options={[
                          {
                            value: 'wifiInternet',
                            label: 'Wifi Internet',
                          },
                          {
                            value: 'mobileConnection',
                            label: 'Mobile Connection',
                          },
                          {
                            value: 'tvBox',
                            label: 'TV Box',
                          },
                          {
                            value: 'smartHome',
                            label: 'Smart Home',
                          },
                          {
                            value: 'satelliteTv',
                            label: 'Satellite TV',
                          },
                          {
                            value: 'internet',
                            label: 'Internet',
                          },
                          {
                            value: 'broadband',
                            label: 'Broadband',
                          },
                          {
                            value: 'business',
                            label: 'Business',
                          },
                        ]}
                      />
                    )}
                  />
                </Col>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='images'>
                    Images
                  </label>
                  <Controller
                    name='images'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Updated Images'
                      />
                    )}
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='district'>
                    District
                  </label>
                  <Controller
                    name='district'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Updated District'
                      />
                    )}
                  />
                </Col>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='location'>
                    Location
                  </label>
                  <Controller
                    name='location'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Updated Location'
                      />
                    )}
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='description'>
                    Description
                  </label>
                  <Controller
                    name='description'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Updated Description'
                      />
                    )}
                  />
                </Col>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='channel'>
                    Channel
                  </label>
                  <Controller
                    name='channel'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Updated Channel'
                      />
                    )}
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='hdChannel'>
                    HD Channel
                  </label>
                  <Controller
                    name='hdChannel'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='text'
                        placeholder='Updated HD Channel'
                      />
                    )}
                  />
                </Col>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='connectionCost'>
                    Connection Cost
                  </label>
                  <Controller
                    name='connectionCost'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className='border-2 w-full py-2 px-2 border-gray-300'
                        type='number'
                        placeholder='Updated Connection Cost'
                      />
                    )}
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <label className='text-gray-500' htmlFor='status mr-5'>
                    Status
                  </label>
                  <Controller
                    name='status'
                    control={control}
                    defaultValue='available'
                    render={({ field }) => (
                      <Select
                        {...field}
                        className='my-2'
                        style={{ width: '100%' }}
                        options={[
                          {
                            value: 'available',
                            label: 'Available',
                          },
                          {
                            value: 'not available',
                            label: 'Not Available',
                          },
                        ]}
                      />
                    )}
                  />
                </Col>
              </Row>

              <div className='w-full h-full my-3'>
                <button className='bg-[#112164] w-full text-white py-2'>
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {services?.data?.map((service: any, index: any) => (
          <ManageWhatWeDoCart
            key={index}
            bg='#fff'
            service={service}
          />
        ))}
      </div>
    </div>
  )
}

export default ManageService

ManageService.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>
}
