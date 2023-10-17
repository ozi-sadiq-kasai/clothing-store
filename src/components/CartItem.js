import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {IoMdAdd, IoMdClose,IoMdRemove} from 'react-icons/io'
// import cart context
import {CartContext} from '../contexts/CartContext'

const CartItem = ({item}) => {
 const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)
// destructure item
const {id,title,image,price,amount} = item
  return (
   <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
     <Link to={`/product/${id}`}>
      <img className='max-w-[80px]'src={image} alt="" />
     </Link>
     <div className='w-full flex flex-col'>
      {/* title & remove icon */}
      <div className='flex justify-between mb-2'>
       <Link 
       to={`/product/${id}`}
       className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
       >
        {title}
       </Link>
       {/* remove icon */}
       <div 
       onClick={()=>{removeFromCart(id)}}
       className='text-xl cursor-pointer'
       >
        <IoMdClose className='text-gray-500 hover:text-red-500  transition'/>
       </div>
      </div>
      <div className='flex gap-x-2 h-[36px] text-sm items-center'>
        {/* qty */}
        <div className='flex flex-1 max-w-[100px] items-center h-full text-primary font-medium border'>
         {/* minus icon */}
         <div className=' flex flex-1 justify-center items-center h-full cursor-pointer'>
          <IoMdRemove onClick={()=>{decreaseAmount(id)}}/>
         </div>
         {/* amount */}
         <div className='flex h-full justify-center items-center px-2'>{amount}</div>
         {/* add icon */}
          <div className=' flex flex-1 justify-center items-center h-full cursor-pointer'>
           <IoMdAdd onClick={()=>{increaseAmount(id)}}/>
          </div>
        </div>
      
         {/* qty */}
         {/* <div>{amount}</div> */}
         {/* item price */}
         <div className='flex flex-1 items-center justify-around'>${price}</div>
         {/* item final price */}
         {/* make the price 2 decimals */}
         <div className='flex flex-1 justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
      </div>
     </div>
    </div>
   </div>
  )
};

export default CartItem;
