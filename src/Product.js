import React, {useState} from "react";

const axios = require('axios')

export default function Product() {
    const [products, setProducts] = useState()
    const [filter, setFilter] = useState([])

    console.log(filter)

    const handleCheckBox = (tag) => {

        if (filter.includes(tag)) {
            let filtered = filter.filter(el => el != tag)
            setFilter(filtered)
        }
        else {
            filter.push(tag)
            setFilter(filter)
        }
        console.log(filter)
       }


    const getProducts = () => {
            return axios.get(`http://localhost:4000/api/products`)
            .then(response => {
                //console.log(`Data:`, response.data)
                setProducts(response.data)
                return response.data
            })
            .catch(error => console.log(error))
        }
        
        if (!products) {
            getProducts()
        }
        
        return(
            <div>
                <form>
                    <label>Vegaani</label>
                    <input type="Checkbox" onClick={() => handleCheckBox("vegaani")}/>
                    <label>Makea</label>
                    <input type="Checkbox" onClick={() => handleCheckBox("makea")}/>


                </form>
                <p>Tuotteet:</p> {filter.length > 0 ? filter : products}
            </div>
        )
}
