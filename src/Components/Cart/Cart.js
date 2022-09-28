import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props
    return (
        <div className="cart">
                    <div className="cart-item">
                    <h3 className='order-summary-title'>Order Summary</h3>
                    <p>
                    Selected Items: {cart.length}
                    <br />
                    Total Price: ${
                        cart.map(cart => cart.price).reduce((prev, next)=> prev + next, 0)
                    }
                    <br />
                    Total Shipping Charge: ${cart.length * 60}
                    <br />
                    Tax: $
                    </p>
                    <h3 className='total'>Grand Total: $1559</h3>
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