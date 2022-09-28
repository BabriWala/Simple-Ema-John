import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    const total = cart.map(cart => cart.price).reduce((prev, next)=> prev + next, 0);
    const shippingCharge = cart.map(cart => cart.shipping).reduce((prev, next)=> prev + next, 0);
    const tax = Number(((cart.map(cart => cart.price).reduce((prev, next)=> prev + next, 0)) * 0.1).toFixed(2));
    const allTotal = total + shippingCharge + tax;
    const quantity = cart.map(cart => cart.quantity).reduce((prev, next)=> prev + next, 0)
    console.log(quantity);
    return (
        <div className="cart">
                    <div className="cart-item">
                    <h3 className='order-summary-title'>Order Summary</h3>
                    <p>
                    Selected Items: {quantity}
                    <br />
                    Total Price: ${
                        total
                    }
                    <br />
                    Total Shipping Charge: ${shippingCharge}
                    <br />
                    Tax: ${
                        tax
                    }
                    </p>
                    <h3 className='total'>Grand Total: ${allTotal.toFixed(2)}</h3>
                    <button className="clear-cart">
                        Clear Cart
                    </button>
                    <button className="review-order">
                        Review Order
                    </button>
                    </div>
         </div>
        
    );
};

export default Cart;