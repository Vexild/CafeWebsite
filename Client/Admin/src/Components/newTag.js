import React, { useState } from 'react'
import axios from 'axios'

const NewTag = () => {
    const [name, setName] = useState();
    const [isProductType, setIsProductType] = useState();
    const [isPriority, setIsPriority] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, isProductType, isPriority);
        axios.post(`http://localhost:4000/api/tags/post`, {
            name: name,
            isProductType: isProductType,
            isPriority: isPriority
        })
    }

    return(
        <div>
            <form>
                <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Tag name"/>
                <br/><input onChange={e => setIsProductType(e.target.value)} type="text" name="isProductType" placeholder="Tag Type"/>
                <br/><input onChange={e => setIsPriority(e.target.value)} type="text" name="isPriority" placeholder="Tag Priority"/>
                <br/><input type="submit" onClick={e => handleSubmit(e)} value="Add Tag"/>
            </form>
        </div>    
    )
}
export default NewTag;