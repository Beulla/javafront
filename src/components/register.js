import React,{useState} from "react";
import "../styles/registerStyles.css"
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function RegisterComponent(){
    const [username,setusername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const Navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
    await axios.post("http://localhost:8080/api/auth/signup", {username: username,email: email,password: password,role: "mod",phone:phone}).then((res)=>{
            console.log(res.data)
            if(res.data){
                alert("successfully created account")
                Navigate("/login")
            }
            else{
                alert(res.data)
            }
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return(
        <div id="form1" className="container">
           
            <form className="form">
            <span id="regspan">Create user</span>
                <div id="div1">
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputusername1" placeholder="username" value={username} onChange={e=>setusername(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputusername1" placeholder="username" value={phone} onChange={e=>setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                <button type="submit" className="btn btn-primary " id="submit1" onClick={handleSubmit}>Submit</button>
                
                </div>
                
            </form>
            
        </div>
    )
}