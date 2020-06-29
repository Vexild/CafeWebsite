import React, {useState} from "react";

const axios = require('axios')

export default function Product() {
  /*
    const [kissa, setKissa] = useState()
    const getProducts = () => {
            return axios.get(`localhost:4000/api/products`)
            .then(response => {
                // Muodossa App: ${response.data} tulee objectobjectafjasgjsapgfja
                console.log(`Data:`, response.data)
                setKissa(response.data)
                return response.data
            })
            .catch(error => console.log(error))
        }
        getProducts()
	*/

        return(
            <div>
                <p>Kissa:</p>
            </div>
        )
}
