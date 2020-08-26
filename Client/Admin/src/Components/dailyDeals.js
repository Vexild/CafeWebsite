import React, { useState, useEffect } from "react"
import axios from "axios"

const DailyDeals = () => {
  const [content, setContent] = useState()
  const [data, setData] = useState()

  const getDeals = () => {
      axios.get(apiUrl + "/api/dailydeals/get")
      .then((response) => {
        let parsedBSON
        //parsedBSON = JSON.parse(JSON.stringify(response.data))
        setContent(response.data[0].content) 
        setData(response.data)
      })
      .catch((error) => console.log(error))
  }

  const handleSubmit = (content) => {
    axios.put(apiUrl + "/api/dailydeals/put", 
    { content: content})
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
    
  }

 useEffect(() => {
   getDeals()
 },[])
  
  if (data) {

    return (
      <div>
        <h3>Daily Deals</h3><br/>

        Set empty deal to hide chalkboard.<br/>
        <br/><label >Daily deal</label><br/>
        <input onChange={e => setContent(e.target.value)} defaultValue={content} placeholder="content" type="text" name="content" />
        <br/><input onClick={handleSubmit(content)} value="Update" type="submit" />
      </div>
    )
  }
  else {
    return (
      <div>
        hetkinen
      </div>
    )
  }
}
export default DailyDeals
