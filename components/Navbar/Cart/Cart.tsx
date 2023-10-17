import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Badge, Space } from 'antd'

const Cart = ({setCartOpen, cartOpen}: any) => {
  return (
    <div onClick={()=> setCartOpen(!cartOpen)} className='flex items-center justify-center cursor-pointer'>
      <Space size='middle' className='flex justify-center items-center mt-2'>
        <Badge count={5}>
          <button className='flex items-center text-[#8b827d] hover:text-black'>
            <li className='flex items-center'>
              <AiOutlineShoppingCart className='text-2xl' />{' '}
            </li>
          </button>
        </Badge>
      </Space>
    </div>
  )
}

export default Cart
