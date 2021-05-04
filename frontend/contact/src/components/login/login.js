import React, { useState } from "react";
import axios from "axios";

function Login({token, setToken }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    let csrf_token = getCookie('csrftoken')
    
  const handleSubmit = (e) => {
      e.preventDefault();
      axios({
        method: "post",
        url: "http://localhost:8000/api/register/",
        data: formData,
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(response => {
          sessionStorage.setItem("token", response.data)
          setToken(response.data)
          console.log(response.data)
      })
      .catch(error => console.log(error))
    }

  return (
    <div className="login" onSubmit={handleSubmit}>
      <form className="loginForm" method="post">
        <input name="username" type="text" placeholder="username" onChange={handleChange}/>
        <input name="email" type="email" placeholder="email" onChange={handleChange}/>
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
        <input name="password2" type="password" placeholder="confirmation" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>

      <div>token === {token}</div>
    </div>
  );
}

export default Login;
