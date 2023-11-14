import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setCart] = useState([]);
    const addCart = (movie)=>{
        console.log(movie.Title)
        setCart((prev)=>[...prev, movie])
      }
    return (
        <CartContext.Provider value={{ cartItem,addCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;