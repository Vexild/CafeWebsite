import React, { useState } from 'react'
import axios from 'axios'

const NewTag = () => {
    const [name, setName] = useState();
    const [isProductType, setIsProductType] = useState(false);
    const [isPriority, setIsPriority] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, isProductType, isPriority);
        axios.post(`http://localhost:4000/api/tags/post`, {
            name: name,
            isProductType: isProductType,
            isPriority: isPriority
        })
    }

    const handleCheckboxPriority = () => {
        if(isPriority){
            setIsPriority(false)
        }
        else {
            setIsPriority(true)
        }
        console.log(isPriority);
    }

    const handleCheckboxType = () => {
        if(isProductType){
            setIsProductType(false)
        }
        else {
            setIsProductType(true)
        }
        console.log(isProductType);
    }

    return(
        <div>
            <form>
                <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Tag name"/>
                <br/><input onClick={handleCheckboxType} type="checkbox" name="isProductType"/> Type
                <br/><input onClick={handleCheckboxPriority} type="checkbox" name="isPriority"/> Priority
                <br/><input type="submit" onClick={e => handleSubmit(e)} value="Add Tag"/>
            </form>
        </div>    
    )
}
export default NewTag;