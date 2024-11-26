import React from "react"

const AddProduct = () => {
  const [name, setName] = React.useState()
  const [price, setPrice] = React.useState()
  const [category, setCategory] = React.useState()
  const [company, setCompany] = React.useState()

  const addProduct = async () => {
    console.warn(name, price, category, company)
    const userId = JSON.parse(localStorage.getItem("user"))._id
    let result = await fetch("http://localhost:3000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    result = await result.json()
    console.warn(result)
  }
  return (
    <div className="product">
      <h1>Add product</h1>
      <input
        type="text"
        placeholder="Enter the product name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter the product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter the product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter the company name"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value)
        }}
      ></input>
      <button className="appButton" onClick={addProduct}>
        Add Product
      </button>
    </div>
  )
}
export default AddProduct
