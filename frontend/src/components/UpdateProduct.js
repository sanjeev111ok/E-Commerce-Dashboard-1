import React from "react"

const UpdateProduct = () => {
  const [name, setName] = React.useState()
  const [price, setPrice] = React.useState()
  const [category, setCategory] = React.useState()
  const [company, setCompany] = React.useState()

  const updateProduct = async () => {
    console.warn(name, price, category, company)
  }
  return (
    <div className="product">
      <h1>Update product</h1>
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
      ></input>{" "}
      <input
        type="text"
        placeholder="Enter the product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
        }}
      ></input>{" "}
      <input
        type="text"
        placeholder="Enter the company name"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value)
        }}
      ></input>{" "}
      <button className="appButton" onClick={updateProduct}>
    Update Product
      </button>
    </div>
  )
}
export default UpdateProduct
