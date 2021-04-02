import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'

const ProductList = (props) => {
    const { name, price, imageUrl, _id } = props.product;
    return (
        <div className="col-md-4 col-sm-12 mb-5">
            <div className="productInfo">
                <img src={imageUrl} alt="" />
                <h4>{name}</h4>
                <div className="caption d-flex justify-content-between ">
                    <p>Price: ${price}</p>
                    <Link to={`/orderProduct/${_id}`}>
                        <button className="buyButton">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductList;