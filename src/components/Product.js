import {useContext} from 'react';
import { Link } from 'react-router-dom';
// import {BsPlus,BsEyeFill} from 'react-iconst/bs'

const Product = ({product}) => {
 const {id,image,price,title,category} = product
  return (
   <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
     <div className='w-full h-full flex justify-center items-center'>
      {/* {image} */}
      <div className='w-[200px] mx-auto flex justify-center items-center'>
       <img src={image} alt={title} className='max-h-[160px] group-hover:scale-x-110'/>
      </div>
     </div>
    </div>
    <div>2</div>
   </div>
  )
};

export default Product;
