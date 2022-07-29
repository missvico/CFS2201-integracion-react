import {useState} from "react";
import ProductCard from './components/ProductCard'
import SearchInput from './components/SearchInput'
import axios from 'axios'

function ProductList(){
    const [query, setQuery] = useState("")
    const [products, setProducts]= useState([])

    const handleChange = function(event){
        setQuery(event.target.value)
    }

    const handlSubmit = function(event){
        event.preventDefault()
        axios(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`)
        .then(function(response){
            setProducts(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    } 
    return(
        <>
            <SearchInput handleChange={handleChange} handleSubmit={handlSubmit}/>
            <div className="d-flex flex-wrap">
                {products.map(product=><ProductCard product={product}/>)}
            </div>
        </>
    )
}

export default ProductList;