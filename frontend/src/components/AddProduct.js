import React from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
  const [name, setName] = React.useState()
  const [price, setPrice] = React.useState()
  const [category, setCategory] = React.useState()
  const [company, setCompany] = React.useState()
  const [error, setError] = React.useState(false)
  const navigate = useNavigate()

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true)
      return false
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id
    let result = await fetch("http://localhost:3000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    result = await result.json()
    if (result) {
      navigate("/")
    }
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
      {error && !name && (
        <span className="invalid-input">Enter valid name</span>
      )}
      <input
        type="text"
        placeholder="Enter the product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
        }}
      ></input>{" "}
      {error && !price && (
        <span className="invalid-input">Enter valid price</span>
      )}
      <input
        type="text"
        placeholder="Enter the product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
        }}
      ></input>{" "}
      {error && !category && (
        <span className="invalid-input">Enter valid category</span>
      )}
      <input
        type="text"
        placeholder="Enter the company name"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value)
        }}
      ></input>{" "}
      {error && !company && (
        <span className="invalid-input">Enter valid company</span>
      )}
      <button className="appButton" onClick={addProduct}>
        Add Product
      </button>
    </div>
  )
}
export default AddProduct
