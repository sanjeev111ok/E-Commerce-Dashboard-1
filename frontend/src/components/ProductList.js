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
  const deleteProduct = async (id) => {
    console.warn(id)
    let result = await fetch(`http://localhost:3000/products/${id}`, {
      method: "Delete",
    })
    result = await result.json()
    if (result) {
     getProducts()
    }
  }
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>S.N.</li>
        <li>Name</li>
        <li>Price</li>
        <li>category</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>Rs.{item.price}</li>
          <li>{item.category}</li>
          <li>
            {" "}
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  )
}
export default ProductList