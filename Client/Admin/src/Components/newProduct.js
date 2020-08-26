import React, { useState } from 'react'
import axios from 'axios'

const NewProduct = () => {
    const [tags, setTags] = useState()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [id, setId] = useState()
    const [productInfo, setProductInfo] = useState() 
    const [description, setDescription] = useState()
    const [productTags, setProductTags] = useState([])

    const getTags = () => {

        return axios.get(apiUrl + "/api/tags/get")
        .then(response => {
            setTags(JSON.parse(JSON.stringify(response)))
            return response.data
        })
        .catch(e => console.log(e))
        
    }

    if (!tags) {
        getTags()
    }

    const handleCheckBoxes = (tag) => {

        if (productTags.includes(tag)) {
            setProductTags(productTags.filter(el => el !== tag))
        }
        else {
            productTags.push(tag)
            setProductTags(productTags)
        }

    }
    
    const generateTagCheckBoxes = (tags) => {
        if (tags) {
            console.log(tags)
            const checkBoxes = []
            //console.log(tags, typeof (tags))
            tags.data.map(element => {
                checkBoxes.push(
                    <>
                   {element.name}  
                    <input type="checkbox" key={element.name} value="element" onClick={() => handleCheckBoxes(element._id)} />
                    </>
                )
            })
            return checkBoxes
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productTags,name,price,id,description,productInfo)
        axios.post(apiUrl + "/api/products/post", {
            name: name,
            price, price,
            id: id,
            description: description,
            productInfo, productInfo,
            tags: productTags
        })
    }
    return (
        <div>
            <form>
                {generateTagCheckBoxes(tags)}
                <br /><input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Product name" />
                <br /><input onChange={e => setPrice(parseFloat(e.target.value))} type="text" name="price" placeholder="Price" />
                <br /><input onChange={e => setId(parseInt(e.target.value))} type="text" name="id" placeholder="Id" />
                <br /><input onChange={e => setDescription(e.target.value)} type="text" name="description" placeholder="description" />
                <br /><input onChange={e => setProductInfo(e.target.value)}type="text" name="productInfo" placeholder="Product info" />
                <br /><input type="submit" onClick={e => handleSubmit(e)} value="Add" />
                <br />
            </form>
        </div>
    )
}
export default NewProduct