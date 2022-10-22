import StoreContext from "./storeContext";
import { useState } from "react"

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1, name:"Alvin" });

    const addToCart = (prod) => {
        setCart([...cart, prod]);
    };
    const removeFromCart = () => {
        console.log("removing product");
    };
    const clearCart = () => {
        console.log("cart is empty");
    }

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart,
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalContext;