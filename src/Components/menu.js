import React, {useState} from 'react'

//Product component returns product cards in grid or list format.
import Product from './products'
//Tags component returns a checkbox for every detected tag.
import Tags from './tags'

const axios = require('axios')

const Menu = () => {

    const [products, setProducts] = useState()
    const [filter, setFilter] = useState([])
    const [layout, setLayout] = useState(true)

    console.log("render")
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

    const getProducts = () => {
            return axios.get(`http://localhost:4000/api/products`)
            .then(response => {
                //Mongo response is in BSON format, array after parsing.
                let parsedBSON
                parsedBSON = JSON.parse(JSON.stringify(response.data))
                setProducts(parsedBSON)
                return response.data
            })
            .catch(error => console.log(error))
        }
        if (!products) {
            //Get data from db if products is undefined
            console.log("getProducts")
            getProducts()
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
                        )}})})
                        //console.log(tags)
                    return tags.map((data, key) => <Tags handleClick={handleCheckBox} data={data} key={key} />)
                    }
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
        return(
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
        )
    }

    export default Menu;