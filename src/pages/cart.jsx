import "./cart.css";
import { useContext } from "react";
import StoreContext from "../state/storeContext";
import ProductInCart from "../components/productInCart";


const Cart = () => { 
    const cart = useContext(StoreContext).cart;

    const getCount = () => {
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
          count += cart[i].quantity;
        }
        return count; 
      };

      const getTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += (cart[i].price * cart[i].quantity);
        }
        return "$" + total.toFixed("2");
      };

    return (
        <div className="cart">
            <div className="cartTopSect container shadow mt-4 d-flex flex-column pt-3">
            <h2 className="header ">One more step to getting your donuts</h2>
            <h5 className="header" >We have {getCount()} products ready for you</h5>
            </div>
            <br />

            <div className="productPrice container d-flex flex-row col-12 gap-3 mx-auto">
                <div className="cartProductList row col-10 shadow">
                    <div className="products gap-1">
                        <h4>Products in cart</h4>
                        <hr />
                        <ul>
                        {cart.map(prod => <ProductInCart key={prod.id} data={prod} />)}
                        </ul>
                        <br />
                    </div>
                </div>    
                    <br />
                <div className="cartPricesList col-2 shadow">
                    <div className="cartPrice">
                        <h4>Total</h4>
                        <hr />
                        <h5>{getTotal()}</h5>
                    </div>
                    <br />
                    <div className="payNow d-flex justify-content-center">
                    <button className="btn btn-warning btn-lg shadow rounded-0" id="payNow">Pay Now</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Cart;