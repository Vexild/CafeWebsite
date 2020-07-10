import React, {useState} from 'react'
import Product from './Product'
import Tags from './Tags'

const axios = require('axios')

export default function Filter() {
    const [products, setProducts] = useState()
    const [filter, setFilter] = useState([])
    const [layout, setLayout] = useState(true)

    console.log("render")
    const handleCheckBox = (tag) => {
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
                let parsedBSON
                parsedBSON = JSON.parse(JSON.stringify(response.data))
                setProducts(parsedBSON)
                return response.data
            })
            .catch(error => console.log(error))
        }
        if (!products) {
            console.log("getProducts")
            getProducts()
        }

        const changeLayout = () => {
            layout === true ? setLayout(false) : setLayout(true)
        }

        const checkBoxes = () => {
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
            if (products) {
                //  let displayedProducts 

                //TODO: tuotteiden suodatus tagien mukaisesti
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