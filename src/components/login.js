import React,{useState} from "react";
import "../styles/registerStyles.css"
import { Link } from "react-router-dom";
import axios from "axios";


export default function LoginComponent(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    // const postData={email,password}
    const handleSubmit=async(e)=>{
        e.preventDefault()
       await axios.post("http://localhost:4000/auth/login",{email:email,password:password}).then((res)=>{
        if(res.status==200){
            localStorage.setItem("token",res.body)
        }
        else{
            alert(res.data)
        }
        }).catch(error=>{
            alert(error.message)
        })
    }
    return(
        <div id="form1">
            <form className="form">
            <span id="regspan">Log into Account</span>
                <div id="div1">
                    
                    <div className="form-group formsgroup1">
                        <i class="fas fa-envelope icons1"></i>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <i class="fas fa-lock icons1"></i>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                <button type="submit" className="btn btn-primary " id="submit1" onClick={handleSubmit}>Login</button>
                <Link to="/register" id="already">Don't have account? Register</Link>
                </div>
                
            </form>
        </div>
    )
}