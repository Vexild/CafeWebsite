const apiUrl = process.env.NODE_ENV === 'production' ?
    process.env.REACT_APP_PRODUCTION_API_URL :
    process.env.REACT_APP_LOCAL_API_URL
    
    export default apiUrl
