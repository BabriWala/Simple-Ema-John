import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
             console.log(data)
        })
    },[])
    return (
        <div className='cart-area'>
            <div className='product-area'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart">
                    <div className="cart-item">
                    <h3 className='order-summary-title'>Order Summary</h3>
                    <p>
                    Selected Items: 6
                    <br />
                    Total Price: $1140
                    <br />
                    Total Shipping Charge: $5
                    <br />
                    Tax: $114
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
        </div>
    );
};

export default Shop;