import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/product'
const CreateProduct = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { description: description, price: price, stock: stock })
        navigate('/')
    }
    return (
        <div>
            <h3>
                create product
            </h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label" for="Description">Description</label>
                    <input className="form-control"
                        type="text"
                        name="Description"
                        id="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="Price">Price</label>
                    <input className="form-control"
                        type="number"
                        name="Price"
                        id="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="Stock">Stock</label>
                    <input className="form-control"
                        type="number"
                        name="Stock"
                        id="Stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default CreateProduct