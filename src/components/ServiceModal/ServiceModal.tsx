import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Modal, Input, Select, Row, Col } from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useUpdateUserProfileMutation } from '../../redux/feature/service/serviceApiSlice'

const ServiceModal = ({ modal6Open, setModal6Open, service }: any) => {
  const id = service?.id
  // console.log(id)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [updateUserProfile] = useUpdateUserProfileMutation()

  const onSubmit = async (profileData: any) => {
    try {
      profileData.price = parseInt(profileData.price)
      profileData.connectionCost = parseInt(profileData.connectionCost)
      // Pass the updated profile data to the mutation
      const response = await updateUserProfile({
        id, // Provide the user ID
        ...profileData, // Pass updated profile data
      }).unwrap()
      setModal6Open(false)
      window.location.reload()
      toast.success('Service added to the cart', {
        position: 'top-right',
        autoClose: 3000,
      })
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <Modal
      title='Update Service'
      centered
      open={modal6Open}
      onOk={() => setModal6Open(false)}
      footer={null}
      onCancel={() => setModal6Open(false)}
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
              Update Service
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default ServiceModal
