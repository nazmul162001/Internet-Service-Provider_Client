import ManageWhatWeDoCart from '@/components/HomePage/WhatWeDo/ManageWhatWeDoCart'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import React, { useState } from 'react'
import { ReactElement } from 'react'
import { BsPencil } from 'react-icons/bs'
import { Modal, Input, Select, Row, Col } from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

const ManageService = () => {
  const [modal2Open, setModal2Open] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
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
        <ManageWhatWeDoCart
          title='Wifi Internet'
          bg='#fff'
          description='High-speed Internet access that is always on & fast.'
          path='m480 301.5v72c0 22.056-17.944 40-40 40h-400c-22.056 0-40-17.944-40-40v-72c0-22.056 17.944-40 40-40h16v-206.5c0-16.266 13.234-29.5 29.5-29.5s29.5 13.234 29.5 29.5v184.5c0 4.418-3.582 8-8 8s-8-3.582-8-8v-184.5c0-7.444-6.056-13.5-13.5-13.5s-13.5 6.056-13.5 13.5v206.5h243.667c4.418 0 8 3.582 8 8s-3.582 8-8 8h-275.667c-13.233 0-24 10.766-24 24v72c0 13.234 10.767 24 24 24h400c13.233 0 24-10.766 24-24v-72c0-13.234-10.767-24-24-24h-67c-4.418 0-8-3.582-8-8v-214.5c0-16.266 13.234-29.5 29.5-29.5s29.5 13.234 29.5 29.5v184.5c0 4.418-3.582 8-8 8s-8-3.582-8-8v-184.5c0-7.444-6.056-13.5-13.5-13.5s-13.5 6.056-13.5 13.5v206.5h59c22.056 0 40 17.944 40 40zm-406 28c-4.418 0-8 3.582-8 8s3.582 8 8 8h21.333c4.418 0 8-3.582 8-8s-3.582-8-8-8zm56.333 0c-4.418 0-8 3.582-8 8s3.582 8 8 8h56.667c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-12.333 109h-56c-4.418 0-8 3.582-8 8s3.582 8 8 8h56c4.418 0 8-3.582 8-8s-3.582-8-8-8zm300 0h-56c-4.418 0-8 3.582-8 8s3.582 8 8 8h56c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-167.049-262.926c9.357 9.357 2.811 25.606-10.607 25.606-13.262 0-20.062-16.151-10.607-25.606 2.834-2.833 6.601-4.394 10.607-4.394 6.738.001 10.607 4.394 10.607 4.394zm26.163-14.849c3.125-3.124 3.125-8.19 0-11.314-20.323-20.323-53.215-20.324-73.539 0-3.125 3.124-3.125 8.189 0 11.314 3.124 3.124 8.189 3.124 11.313 0 14.07-14.07 36.84-14.071 50.912 0 3.124 3.124 8.19 3.124 11.314 0zm-91.924-29.699c30.484-30.484 79.822-30.486 110.309 0 1.562 1.562 3.609 2.343 5.657 2.343 7.063 0 10.711-8.603 5.657-13.657-36.737-36.736-96.197-36.74-132.936 0-3.125 3.124-3.125 8.189 0 11.314 3.123 3.125 8.189 3.125 11.313 0z'
        />
      </div>
    </div>
  )
}

export default ManageService

ManageService.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
