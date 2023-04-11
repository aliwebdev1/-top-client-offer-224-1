import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCarts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCard = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCarts(newCart)

    }

    return (

        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCard={handleAddToCard}
                ></Product>)}
            </div>

            <div className="card-container">
                <h6>Order Sammary</h6>
                <p>Selected Items: {cart.length} </p>
            </div>
        </div>

    );
};

export default Shop;