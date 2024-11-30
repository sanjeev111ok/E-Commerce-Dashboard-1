import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    }
  })

  const handleLogin = async () => {
    console.warn(email, password)
    let result = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    result = await result.json()
    console.warn(result)
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user))
      localStorage.setItem("token", JSON.stringify(result.auth))
      navigate("/")
    } else {
      alert("Please enter the correct details plzzz")
    }
  }

  return (
    <div className="divLogin">
      <h1 className="login">Login</h1>

      <input
        className="inputbox"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="inputbox"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleLogin} className="appButton" type="button">
        Login
      </button>
    </div>
  )
}
export default Login
