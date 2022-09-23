import React, {useState, useContext} from "react";   
export const useCartContext = () => useContext(CartContext);
const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {    
    const [cart, setCart] = useState ([]);

    const agregarProducto = (item, quantity) =>{
        if (enElCarrito(item.id)) {
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product , quantity: product.quantity + quantity} : product
            })); 
        }   else {
                setCart([...cart ,{...item, quantity}])
        }
        }
        console.log("carrito" , cart);


    const limpiarCarrito = () => setCart([]);

    const enElCarrito = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const borrarDelCarrito = (id) => setCart(cart.filter(product => product.id !== id));



    return (
        <CartContext.Provider value={{
            limpiarCarrito,
            enElCarrito,
            borrarDelCarrito,
            agregarProducto,

        }}>
            {children}
        </CartContext.Provider>
)
}

export default CartProvider 