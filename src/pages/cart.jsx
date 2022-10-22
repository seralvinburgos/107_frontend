import "./cart.css";
import { useContext } from "react";
import StoreContext from "../state/storeContext";


const Cart = () => {
    const cart = useContext(StoreContext).cart;
    return (
        <div className="cart">
            <div className="cartTopSect container shadow mt-4 d-flex flex-column pt-3">
            <h2 className="header ">One more step to getting your donuts</h2>
            <h5 className="header" >We have {cart.length} products ready for you</h5>
            </div>
            <br />

            <div className="cartProductList container row col-6 mx-auto shadow">
            <div className="products">
                <ul>
                    {cart.map(p => <li className="my-3 fw-bold" key={p._id}>{p.title} - {p.quantity}</li>)}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Cart;