import React, { useState } from 'react';
import Modal from 'react-modal'
import NewProduct from './newProduct'

Modal.setAppElement('#root')

const ProductList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
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
        </div>
    )
}

export default ProductList;