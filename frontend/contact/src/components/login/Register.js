import React, { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "./register.scss";

function Register({setToken}) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData["password2"] !== formData["password"]) {
      setError("Passwords must much");
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/register/",
        data: formData,
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => setError("One of your credentials is incorrect"));
    }
  };

  return (
    <div className="register" onSubmit={handleSubmit}>
      <div className="register-form-div">
        <i className="material-icons">account_circle</i>
        <h1 className="log-header">Fill in Your Credentials</h1>
        {error ? (
          <div className="form-errors">
            <ul>
              <li className="error">{error}</li>
            </ul>
          </div>
        ) : null}
        <form className="registerForm" method="post">
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          <input
            name="password2"
            type="password"
            placeholder="confirmation"
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit-r">
            Sign Up
          </button>
        </form>
        <Link to="/login">already have an account?</Link>
      </div>
    </div>
  );
}

export default Register;
