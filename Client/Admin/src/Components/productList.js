import React, { useState } from 'react';
import Modal from 'react-modal'
import NewProduct from './newProduct'
import axios from 'axios'
import Product from './products'
Modal.setAppElement('#root')

const ProductList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [products, setProducts] = useState()
    const [filter, setFilter] = useState([])
    const [layout, setLayout] = useState(false)
    const [tags, setTags] = useState()

    const getProducts = () => {
            return axios.get(`http://localhost:4000/api/products/get`)
            .then(response => {
                let parsedBSON
                console.log(response.data)
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
   
    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const productDivs = () => {
            //Creates product cards
            //TODO: filtering
            if (products) {
                //  let displayedProducts..
            return products.map((data, key) => <Product layout={layout} data={data} key={key} />)
            }
            else {
                return (
                    <div>
                        <a href="https://www.youtube.com/watch?v=VbXx76K5-CE">Hetkinen  </a>
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
            <NewProduct/>
            <button onClick={closeModal}>Close</button>
            </Modal>
            
            <h3>Product list</h3>
           {productDivs()} 
        </div>
    )
}

export default ProductList;