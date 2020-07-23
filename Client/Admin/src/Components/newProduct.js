import React, { useState } from 'react'
import axios from 'axios'
//TODO: Tags from DB, currently hardcoded
//TODO: Response after sending
//TODO: Productinfo {}?

const NewProduct = () => {
    const [tags, setTags] = useState(["vegan", "test", "kissa", "kebab"])
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [id, setId] = useState()
    const [productInfo, setProductInfo] = useState() 
    const [description, setDescription] = useState()
    const [productTags, setProductTags] = useState([])

    const handleCheckBoxes = (tag) => {

        if (productTags.includes(tag)) {
            setProductTags(productTags.filter(el => el != tag))
        }
        else {
            productTags.push(tag)
            setProductTags(productTags)
        }

    }
    
    const generateTagCheckBoxes = (tags) => {
        if (tags) {
            const checkBoxes = []
            //console.log(tags, typeof (tags))
            tags.map(element => {
                checkBoxes.push(
                    <>
                   {element}  
                    <input type="checkbox" key={element} value="element" onClick={() => handleCheckBoxes(element)} />
                    </>
                )
            })
            return checkBoxes
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productTags,name,price,id,description,productInfo)
        axios.post('http://localhost:4000/api/products/post', {
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