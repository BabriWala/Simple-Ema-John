import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, price, img, ratings, seller} = props.product;
    return (
            <div>
                <div className='products-container'>
                    <div className="products">
                        <img src={img} alt="Product" />
                        <h6 className='product-title'>{name}</h6>
                        <span className='product-price'>Price: ${price} </span>
                        <p className='manufacturer'>Manufacturer : {seller}</p>
                        <p className='rating'>Rating : {ratings} start</p>
                    </div>
                    <button className='add-to-cart-button'>
                            <span>Add To Cart <i className="uil uil-shopping-cart-alt"></i></span>
                    </button>
            </div>
            </div>
    );
};

export default Product;