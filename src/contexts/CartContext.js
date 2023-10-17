import { createContext,useState, useEffect }from 'react';
export const CartContext = createContext()

const CartProvider = ({children}) => {
 const [cart,setCart] = useState([])

// add to cart function
 const addToCart = (product,id) =>{
 const newItem = {...product,amount:1}
  // check it item is already in the cart
  const cartItem = cart.find((item) =>{
   return item.id === id
  })
 // if item is already in cart
 if(cartItem){
  const newCart =[...cart].map((item)=>{
   if(item.id === id){
    return {...item,amount:cartItem.amount + 1}
   }else{
    return item
   }
  })
  setCart(newCart)
 }
 // if the item with the specified id is not already in the cart, it's a new item that needs to be added
 else{
  setCart([...cart,newItem])
 }
 }
 
 // remove from cart
 const removeFromCart = (id) => {
  const newCart = cart.filter((item) => {
   return item.id !== id
  })
  setCart(newCart)
 }

 // clear cart
 const clearCart =() => {
  
 }

  return <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
   {children}
  </CartContext.Provider>;
};

export default CartProvider;

