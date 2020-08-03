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

    const getProducts = () => {
        return axios.get(`http://localhost:4000/api/products/get`)
            .then(response => {
                let parsedBSON
                parsedBSON = JSON.parse(JSON.stringify(response.data))
                setProducts(parsedBSON)
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
    /*

    const filterProducts = (tags, filter) => {
        if (filter.isArray()) {
           products.map(product => {
               if (tags.includes(product.tags)) {
                   displayedProducts.push(product)
               }
           }) 
           setDisplayedProducts(displayedProducts)
        }
        else {
            setDisplayedProducts(products)
        }

    }

    if (!displayedProducts && tags) {
            filterProducts(tags, filter)    
    }
    */

    const createCheckBoxes = () => {
		if (tags) {
		let temp = []
			tags.forEach(element => {
				temp.push(
					<>
						<label>{element.name}</label>
						<input type="checkbox" name={element.name} onClick={() => handleCheckBox(element._id)} />
					</>
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
        if (products) {
            return products.map((data, key) => <Product filter={filter} checkBoxes={checkBoxes} tags={tags} layout={layout} data={data} key={key} />)
        }
        else {
            return (
                <div>
                    <p>Hetkinen</p>
                </div>
            )
        }
    }

    

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

export default ProductList;