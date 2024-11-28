import React, { useEffect, useState } from "react"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let result = await fetch("http://localhost:3000/products")
    result = await result.json()
    setProducts(result)
  }
  console.warn("products", products)
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>S.N.</li>
        <li>Name</li>
        <li>Price</li>
        <li>category</li>
      </ul>
      {products.map((item, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>Rs.{item.price}</li>
          <li>{item.category}</li>
        </ul>
      ))}
    </div>
  )
}
export default ProductList
