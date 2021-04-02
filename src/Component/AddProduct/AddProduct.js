import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import SideAdmin from '../SideAdmin/SideAdmin';
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageUrl: imageUrl
        };
        const url = `http://localhost:5000/addProduct`
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)

        })
            .then(res => console.log(res))
            .then(result => {
                alert('Product Uploaded')
            })
    }


    const handelImageSubmit = e => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '22a6bcd638cae7902f3480ed41288b00');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <SideAdmin></SideAdmin>
            </div>
            <div className="col-md-6 col-sm-12">
                <h4 className="mb-3 mt-3">Product Add</h4>
                <div className="rightSide">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Product Name</p>
                        <input name="name" defaultValue="" ref={register({ required: true })} />
                        <br />
                        <p>Product Price</p>
                        <input name="price" defaultValue="" ref={register({ required: true })} />
                        <br />
                        <p>Image Upload</p>
                        <input name="exampleRequired" type="file" onChange={handelImageSubmit} />
                        <br/>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="mt-3 addButton" type="submit" value="Add Product"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;