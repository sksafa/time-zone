import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import ProductList from '../ProductList/ProductList';


const Home = () => {
    const [product , setProduct] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[])

    return (
        <div className="container mt-5">
            <div className="row">
            {
               product.map(product => <ProductList product = {product} ></ProductList> ) 
            }
            </div>
        </div>
    );
};

export default Home;