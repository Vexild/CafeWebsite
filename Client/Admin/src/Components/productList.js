import React, { useState } from 'react';
import Modal from 'react-modal'
import NewProduct from './newProduct'
import axios from 'axios'
import Product from './product'
Modal.setAppElement('#root')

const ProductList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [products, setProducts] = useState()
    const [layout] = useState(false)
    const [tags, setTags] = useState()
    const [checkBoxes, setCheckBoxes] = useState()
    const [filter, setFilter] = useState([])
    const [displayedProducts, setDisplayedProducts] = useState()
    const [tempProducts, setTempProducts] = useState()

    console.log(displayedProducts)

    const getProducts = () => {
        return axios.get(`http://localhost:4000/api/products/get`)
            .then(response => {
                let parsedBSON
                parsedBSON = JSON.parse(JSON.stringify(response.data))
                setProducts(parsedBSON)
                setDisplayedProducts(parsedBSON)
                return response.data
            })
            .catch(error => console.log(error))
    }

    const getTags = () => {
        return axios.get('http://localhost:4000/api/tags/get')
            .then(response => {
                setTags(response.data)
            })
    }

    if (!products) {
        getProducts()
    }
    if (!tags) {
        getTags()
    }

    const filterProducts = (filter, products) => {
        let temp
        if (filter.length > 0) {
            setTempProducts(products)
            console.log("asd")
           filter.forEach(tag => {
               temp = tempProducts.filter(product => product.tags.includes(tag))
           }
           ,setDisplayedProducts(temp)
           )
    }
}

    if (!displayedProducts && filter && products) {
            filterProducts(filter, products)    
    }

    const createCheckBoxes = () => {
		if (tags) {
		let temp = []
			tags.forEach((element, i) => {
                temp.push(
                <div key={i}>
                <label >{element.name}</label>
                <input type="checkbox" name={element.name} onClick={() => handleCheckBox(element._id)} />
                </div>
                )
			}
			)
			temp.push(<br />)
			setCheckBoxes(temp)
		}
    }

    const handleCheckBox = (_id) => {

       if (filter.includes(_id)) {
            let filtered = filter.filter(el => el !== _id)
            setFilter(filtered)
        }
        else {
            filter.push(_id)
            setFilter(filter)
        }
            setDisplayedProducts()
    }
    if (!checkBoxes) {
        createCheckBoxes()
    }

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const productDivs = () => {
            return displayedProducts.map((data, key) => <Product filter={filter} checkBoxes={checkBoxes} tags={tags} layout={layout} data={data} key={key} />)
        }
    
if (displayedProducts) {
    return (
        <div>
            <button onClick={openModal}>New product</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <NewProduct />
                <button onClick={closeModal}>Close</button>
            </Modal>

            <h3>Product list</h3>
            {checkBoxes ? checkBoxes : ""}
            {productDivs()}
        </div>
    )
}
else {
    return (
        <div>
            ASD
        </div>
    )
}
}

export default ProductList;