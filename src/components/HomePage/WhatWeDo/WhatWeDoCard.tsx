import { useGetProfileQuery } from '@/redux/feature/user/userApiSlice'
import { useAddToCartMutation, useGetCartQuery } from '../../../redux/feature/cart/cartApiSlice'
import { Image } from 'antd'
import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBookmarkCheck } from 'react-icons/bs'
import { CiCircleMore } from 'react-icons/ci'
import { toast } from 'react-toastify'
import { getAccessToken } from '@/redux/api/apiSlice'

interface cardType {
  service: any
  bg: string
}

const WhatWeDoCard = ({ service, bg }: cardType) => {
  const { data: profile } = useGetProfileQuery({})
  // console.log(profile?.data?.id)
  const userId = profile?.data?.id
  const router = useRouter()
  const { data: cartData, error: cartError } = useGetCartQuery({});
  const [addToCart] = useAddToCartMutation()
  const token = getAccessToken()
  

  const handleAddToCart = (id: any) => {
    // Check if the item with the same 'serviceId' already exists in 'cartData'
    const isItemInCart = cartData?.data?.some((item: any) => item.serviceId === id);
  
    if(!token){
      toast.error('Please login first', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    } else if (isItemInCart) {
      // If the item is already in the cart, show an error message or toast
      toast.error('Service is already in the cart', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    } else {
      // If the item is not in the cart, add it to the cart
      addToCart({ serviceId: id, userId: userId })
        .then(() => {
          toast.success('Service added to the cart', {
            position: 'bottom-right',
            autoClose: 3000,
          });
        })
        .catch((error: any) => {
          console.log('Error adding to cart:', error);
        });
    }
  };
  

  return (
    <div className='relative w-full h-full overflow-hidden card_main rounded cursor-pointer'>
      <div
        className={`py-5 px-8 w-full h-full bg-[${bg}] border-2 card_body rounded`}
      >
        <span className='whiteOnHover block py-3'>
          <Image
            width={60}
            src={service?.images ? service?.images : '/default2.png'}
          />
        </span>
        <h3 className='text-[#112164] whiteOnHover text-xl md:text-2xl'>
          {service?.name}
        </h3>
        <h3 className=' text-lg text-[#0d99e5] px-2 whiteOnHover'>
          ${service?.price}
        </h3>
        <p className='py-2 text-[#6c757d] font-bold font-sans text-sm whiteOnHover'>
          category:{' '}
          <span className='font-normal font-sans'>{service?.category}</span>
        </p>
        <p className='py-2 text-[#6c757d] font-normal font-sans text-sm whiteOnHover'>
          {service?.description.slice(0, 50)}
        </p>
        {/* circle  */}
        <div className='custom_circle bg-[#0D99E5] absolute -top-32 right-32 w-36 h-28'></div>
        <div className='w-3/5 h-10 absolute bottom-3 left-1/2  transform -translate-x-1/2'>
          <div className='w-full h-full relative'>
            <div className='w-full h-full flex justify-evenly items-center gap-3 cart_icon bg-[#0d99e5fa]'>
              <CiCircleMore
                onClick={() => router.push(`/service/${service?.id}`)}
                className='text-2xl md:text-3xl lg:text-4xl text-white'
              />
              <BsBookmarkCheck
                onClick={() => router.push(`/service/booking/${service?.id}`)}
                className='text-xl md:text-2xl lg:text-3xl text-white'
              />
              <AiOutlineShoppingCart
                onClick={() => handleAddToCart(service?.id)}
                className='text-2xl md:text-3xl lg:text-4xl text-white'
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoCard
