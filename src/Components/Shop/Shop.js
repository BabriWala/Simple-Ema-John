import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
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
            <Cart cart={cart}></Cart>
            </div>
    );
};

export default Shop;