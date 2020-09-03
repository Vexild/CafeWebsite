import React, {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';

//Product component returns product cards in grid or list format.
import Product from './products'
//Tags component returns a checkbox for every detected tag.
import Tags from './tags'
import SingleProduct from './singleProductPage'
import { ProductsContext } from "./productsContext";
import apiUrl from '../api'

const axios = require('axios')

const Menu = (props) => {

    const products = useContext(ProductsContext)
    const [filter, setFilter] = useState([])
    const [layout, setLayout] = useState(true)
    const [isItemSelected, setIsItemSelected] = useState(false)
    const [itemSelected, setItemSelected] = useState({})


    // console.log("render")
    const handleCheckBox = (tag) => {
        //Determines which checkboxes are checked.
        if (filter.includes(tag)) {
            let filtered = filter.filter(el => el !== tag)
            setFilter(filtered)
        }
        else {
            filter.push(tag)
            setFilter(filter)
        }
       }

    const changeLayout = () => {
        //Toggle for product list/grid layout
        layout === true ? setLayout(false) : setLayout(true)
    }

    const checkBoxes = () => {
        //Creates checkboxes from products.tags
        if (products) {
            let tags = []

            products.forEach((element) => {
                element.tags.forEach((element) => {
                    if (tags.includes(element)) {
                        //console.log("Kissa")
                        //TODO
                        } 
                else {
                    tags.push(element
                    )}})}) // please dont
                    //console.log(tags)
                return tags.map((data, key) => <Tags handleClick={handleCheckBox} data={data} key={key} />)
                }   
            }

    const navigateBack = () => {
        setIsItemSelected(false)
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
    //console.log("item",isItemSelected)
    return(
        <div>
            {isItemSelected ? (
                    <div>
                    <Button onClick={() => navigateBack()}>Back</Button>
                    <SingleProduct data={itemSelected} />
                    </div>
                ) : (
                <div>
                    <form  className="container row">
                        {checkBoxes()} 
                    </form>
                    <p>Tuotteet:</p> 
                    <button onClick={changeLayout}>LayoutToggle</button>
                    <div className="container-fluid">
                        <div className="row">
                    {productDivs()}
                    </div>
                    </div>
                </div>
            )}
        </div>
    )
}

    export default Menu;