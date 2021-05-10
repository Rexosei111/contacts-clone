import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom"
import axios from "axios";
import "./login.scss";

function Login({token, setToken}) {
  const history = useHistory()
    history.push("/login")
    
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    })
    );
    setError("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await axios({
      method: "post",
      url: "http://localhost:8000/api/login/",
      data: formData,
      headers: {
        "Content-type": "application/json",
      },
    })
    const {token, email} = data;
    setToken(token, email)
      // .then((response) => {
      //   const token = response.data['token'];
      //   const email = response.data['email']
      //   if (token) {
      //     setToken(token, email);
      //   }
      // })
      // .catch((error) => 
      //   setError("One of your credentials is incorrect")
      // )
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <div className="login-form-div">
        <i className="material-icons">account_circle</i>
        <h1 className="log-header">Please Login</h1>
        {error ? <div className="form-errors">
          <ul>
            <li className="error">{error}</li>
          </ul>
        </div> : null}
        <form className="loginForm" method="post">
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit">
            login
          </button>
        </form>
        <Link to="/register">- Create An Account -</Link>

      </div>
    </div>
  );
}

export default Login;
