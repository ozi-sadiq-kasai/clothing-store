import { createContext,useEffect,useState }from 'react';
export const CartContext = createContext()

const CartProvider = ({children}) => {
 // cart state
 const [cart,setCart] = useState([])
 
 // item amount state
 const [itemAmount,setItemAmount] = useState(0)

 // total price state
 const[total,setTotal] = useState(0)
 useEffect(()=>{
  const total = cart.reduce((accumulator,currentItem) =>{
   return accumulator + currentItem.price * currentItem.amount
  },0)
  setTotal(total)
 })

 // update item amount
 useEffect(() => {
  if (cart){
   const amount = cart.reduce((accumulator,currentItem) =>{
    return accumulator + currentItem.amount
   },0)
   setItemAmount(amount)
  }
 })

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
  setCart([])
 }

 // increase amount
 const increaseAmount = (id) => {
  const cartItem = cart.find(item => item.id === id)
  addToCart(cartItem,id)
 }

 // decrease amount
const decreaseAmount = (id) => {
  // Find the item in the cart
  const cartItem = cart.find(item => item.id === id);

  if (cartItem) {
    // If the item is found in the cart, decrease its amount
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });

    // Check if the updated amount is less than 2
    if (cartItem.amount < 2) {
      // If so, remove the item from the cart
      removeFromCart(id);
    } else {
      // Otherwise, update the cart
      setCart(newCart);
    }
  }
};


  return <CartContext.Provider
   value={{
    cart,
   addToCart,
   removeFromCart,
   clearCart,
   increaseAmount,
   decreaseAmount,
   itemAmount,
   total,
   }}>
   {children}
  </CartContext.Provider>;
};

export default CartProvider;

