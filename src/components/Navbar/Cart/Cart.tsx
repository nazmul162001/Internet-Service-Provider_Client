import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Badge, Space } from 'antd'
import { useGetProfileQuery } from '@/redux/feature/user/userApiSlice'
import { useGetCartQuery } from '@/redux/feature/cart/cartApiSlice'

const Cart = ({ setCartOpen, cartOpen }: any) => {
  const { data: profile } = useGetProfileQuery({})
  const { data: cart } = useGetCartQuery({})
  // console.log(cart?.data?.length)

  const currentUserId = profile?.data?.id

  // Filter cart items that match the currentUserId
  const filteredCart = cart?.data?.filter((item: any) => item.userId === currentUserId);

  return (
    <div
      onClick={() => setCartOpen(!cartOpen)}
      className='flex items-center justify-center cursor-pointer'
    >
      <Space size='middle' className='flex justify-center items-center mt-2'>
        <Badge count={filteredCart?.length || 0}>
          <button className='flex items-center text-[#8b827d] hover:text-black'>
            <li className='flex items-center'>
              <AiOutlineShoppingCart className='text-2xl' />
            </li>
          </button>
        </Badge>
      </Space>
    </div>
  );
}

export default Cart;
