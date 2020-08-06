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
    //const [checkBoxes, setCheckBoxes] = useState()
    const [filter, setFilter] = useState([])
    const [displayedProducts, setDisplayedProducts] = useState()
    const [tempProducts, setTempProducts] = useState()

    const getProducts = () => {
        return axios.get(`http://localhost:4000/api/products/get`)
            .then(response => {
                let parsedBSON
                parsedBSON = JSON.parse(JSON.stringify(response.data))
                setProducts(parsedBSON)
                setDisplayedProducts(parsedBSON)
                setTempProducts(parsedBSON)
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
            return temp
		}
    }

   const handleCheckBox = (_id) => {
       console.log("click", _id)

       if (filter.includes(_id)) {
           console.log("dupe")
            let filtered = filter.filter(el => el !== _id)
            setFilter(filtered)
            filterProducts(filtered)
        }
        else {
            console.log("not dupe")
            filter.push(_id)
            setFilter(filter)
            console.log(filter)
            filterProducts(filter)
        }
    }

    const filterProducts = (filter) => {
        let temp
        if (filter) {
        if (filter.length > 0 && products) {
           filter.forEach(tag => {
               if (temp) {
                  temp = [temp, ...temp.filter(product => product.tags.includes(tag))] 
               }
               else {
               temp = products.filter(product => product.tags.includes(tag))
               }
               console.log(temp)
           }

           )
           temp = temp.filter(el => {
               return el !== undefined
           })
           console.log(temp)
           setDisplayedProducts(temp)
        }
    }
}    


    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const productDivs = (products) => {
            return products.map((data, key) => <Product filter={filter} tags={tags} layout={layout} data={data} key={key} />)
        }
    
        if (products) {
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
            {tags ? createCheckBoxes() : ""}
            {displayedProducts ? filter.length > 0 ? productDivs(displayedProducts) : productDivs(products) : productDivs(products)}
        </div>
    )
        }
        else {
            return(
                <p>Loading..</p>
            )
        }
}

export default ProductList;