import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './OrderProduct.css'

const OrderProduct = () => {

    const { _id } = useParams();
    const [loggedInUser, setLoggedInUser]  =  useContext(UserContext);
    const [orderItem, setOrderItem] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/orderProduct/' + _id)
            .then(res => res.json())
            .then(data => setOrderItem(data))
    }, [_id]);

    const orderSubmit = () =>{
        const orderProduct = {
            productName:orderItem.name,
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString(),
            email:loggedInUser.email

        }
         
        const url =`http://localhost:5000/orderProductList`
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify(orderProduct)

        })
        .then(res =>{
            console.log(res);
            alert('Thank You Order Confirm :) ')
        })
       
    }

    

    return (
        <div className="container">
            <h2 className="mt-4">Checkout</h2>
            <div className="row">
                <div className="col-md-3 col-sm-12"></div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                    <div className="checkout mt-3">
                        <table>
                            <tr>
                                <td className="textBold">Product Name</td>
                                <td className="textBold">Quantity</td>
                                <td className="textBold">Price</td>
                            </tr>
                            <tr>
                                <td><p>{orderItem.name}</p></td>
                                <td><p>1</p></td>
                                <td><p>${orderItem.price}</p></td>
                            </tr>
                            <tr>
                                <td className="textBold"><p>Total</p></td>
                                <td><p></p></td>
                                <td className="textBold"><p>${orderItem.price}</p></td>
                            </tr>

                            <tr>
                            <td> <button  className="buyButton" onClick={orderSubmit} >Checkout</button> </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
};

export default OrderProduct;