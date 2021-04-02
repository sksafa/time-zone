import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import SideAdmin from '../SideAdmin/SideAdmin';
import './MangeProduct.css'

const MangeProduct = () => {
    const [product, setProduct] = useState([]);
    const history = useHistory();
    const location = useLocation();
    //  const refresh = useRefresh(history, redirectPath);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    const deleteProduct = (id) => {

        fetch("http://localhost:5000/deleteProduct/" + id, {
            method: 'DELETE',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(id)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    // const removeItem= document.getElementById('removeElement');
                    // const re = current.target.removeElement;
                    // re.style.display = "none";
                    //removeItem.style.display="none";
                    // window.location.reload();
                    // current.target.parentNode.style.display = "none";
                    //console.log(res);
                    //alert('deleted :) ')
                    // window.top.location = window.top.location

                    //history.push('/manageProduct');
                    // history.replace('./admin');
                }
            })


    }




    return (
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <SideAdmin></SideAdmin>
            </div>
            <div className="col-md-4 col-sm-12">
                <h4 className="mt-2">Product List</h4>
                <div className="deleteProduct mb-5">
                    <table>
                        <tr>
                            <td className="textBold"><p>Product Name</p></td>
                            <td className="textBold"><p>Product Price</p></td>
                            <td className="textBold"><p>Action</p></td>
                        </tr>
                        {
                            product.map(delProduct => <tr id="removeElement">
                                <td><p>{delProduct.name}</p></td>
                                <td><p>{delProduct.price}</p></td>
                                <td> <button className="deleteButton" onClick={() => deleteProduct(delProduct._id)}>Delete</button> </td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeProduct;