import React, {useState} from "react";

const axios = require('axios')

export default function Product() {
    const [products, setProducts] = useState()
    const [filter, setFilter] = useState([])
    let temp = 0
    console.log(filter)

    const handleCheckBox = (e) => {
        let temp
        console.log(temp)
        temp = e
        if (filter.length === 0) {
            
            setFilter([temp])
            return
        }
        if (filter.includes(e)) {
            console.log("HALT!")
            if (filter.length === 1) {
                setFilter([])
                return
            }
            temp = filter.slice(filter.indexOf(e) + 1, 1) 
            console.log("temp: ", temp)
            setFilter(temp)
            return
        }
        else {
            console.log("asd")
            filter.push(e)
            setFilter(filter)
            return
        }


//        filter.length > 0 ? filter.includes(e) ? setFilter("Kissa") : setFilter(filter, e) : setFilter(e)

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
/*
        if (products) {
            console.log(`Aktuaalinen kissa: ${products}`)
        }
        */
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
