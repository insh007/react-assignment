import React, {useState} from "react"  //hooks

const ProductPage = () => {
    const [count, setCount] =useState(0)
    return <div>
        <h1>Product Page</h1>
        <p onClick={()=> setCount(count+1)}>Increment Count- {count}</p>
    </div>
}

export default ProductPage