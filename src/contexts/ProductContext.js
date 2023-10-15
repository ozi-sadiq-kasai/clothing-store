import {createContext,useState,useEffect} from 'react';

// create context
export const ProductContext = createContext()

const ProductProvider = ({children}) => {
 // product state
 const [products,setProducts] = useState([])

 // fetch products
 useEffect(()=>{
  const fetchProducts = async()=>{
   try{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
   }
   catch(error){
    console.error('Error fetching products',error)
   }
  }
  fetchProducts()
 },[])
  return <ProductContext.Provider value= {{products}}>
   {children}
   </ProductContext.Provider>;
};

export default ProductProvider;
