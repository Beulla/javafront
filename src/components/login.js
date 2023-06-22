import React, { useState } from "react";
import "../styles/registerStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        const token = response.data;
        Cookies.set("token", token);
        navigate("/list");
      } else {
        alert(response.data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div id="form1">
      <form className="form" id="fo">
        <span id="regspan">Log into Account</span>
        <div id="div1">
          <div className="form-group formsgroup1">
            <i className="fas fa-envelope icons1"></i>
            <input
              type="email"
              className="form-control contol2"
              id="control2"
              aria-describedby="emailHelp"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button
            type="submit"
            className="btn btn-primary"
            id="submit1"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
