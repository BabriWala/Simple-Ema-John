import React from 'react';
import './Shop.css';

const Shop = () => {
    return (
        <div>
            <div>
                <div className='products-container'>
                    <div className="products">
                        <img src="" alt="" />
                        <h6>Ultraboost 22 Shoes</h6>
                        <span>Price: $190 </span>
                        <p>Manufacturer : Addidas</p>
                        <p>Rating : 3 start</p>
                        <button>
                        <span>Add To Cart <i class="uil uil-shopping-cart-alt"></i></span>
                        </button>
                    
                    </div>
                    
                </div>
            </div>
            <div className="cart">

            </div>
        </div>
    );
};

export default Shop;