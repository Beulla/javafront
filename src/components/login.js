import React, { useState } from "react";
import "../styles/registerStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginComponent() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signin", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        const token = response.data;
        Cookies.set("token", token);
        navigate("/products");
      } else if (response.status === 401) {
        alert("wrong username or password");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div id="form1" className="container mb-8">
      <form className="form">
        <h5 className="text-center mb-2">Kalim Online Supermarket</h5>
        <span id="regspan">Log into Account</span>
        <div id="div1">
          <div className="form-group formsgroup1">
            <i className="fas fa-envelope icons1"></i>
            <input
              type="username"
              className="form-control control1"
              id="control2"
              aria-describedby="usernameHelp"
              placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="form-group formsgroup1">
            <i className="fas fa-lock icons1"></i>
            <input
              type="password"
              className="form-control control1"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group formsgroup1">
            <button type="submit" className="form-control btn btn-primary " id="submit1" onClick={handleSubmit}>Login</button>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
}
