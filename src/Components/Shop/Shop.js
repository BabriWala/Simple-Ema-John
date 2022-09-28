import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            //  console.log(data)
        })
    },[])

        useEffect(()=>{
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id in storedCart){
                const addedProduct = products.find(product=> product.id === id);
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);

                    // console.log(addedProduct);
                }
            }
            setCart(savedCart);
        },[products])

    const handleAddToCart = (SelectedProduct)=>{
        console.log(SelectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id);
        if(!exists){
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        console.log(newCart);
        setCart(newCart)
        addToDb(SelectedProduct.id)
        
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