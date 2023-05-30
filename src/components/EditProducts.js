import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/product/'

const EditProducts = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            description: description,
            price: price,
            stock: stock
        })
        navigate('/')
    }

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById()
    }, [])

    return (
        <div>
            <h3>
                edit product
            </h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label" for="Description">Description</label>
                    <input className="form-control"
                        type="text"
                        name="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="Price">Price</label>
                    <input className="form-control"
                        type="number"
                        name="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="Stock">Stock</label>
                    <input className="form-control"
                        type="number"
                        name="Stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default EditProducts