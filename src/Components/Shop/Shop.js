import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
             console.log(data)
        })
    },[])

    const handleAddToCart = (product)=>{
        console.log(product);
        const newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart)
    }
    return (
        <div className='cart-area'>
            <div className='product-area'>
                {
                    // products.map(product => <Product product={product} key={product.id} handleAddToCart={()=> handleAddToCart(product)}></Product>)
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
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
        </div>
    );
};

export default Shop;