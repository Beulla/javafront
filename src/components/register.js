import React,{useState} from "react";
import "../styles/registerStyles.css"
import { Link, redirect } from "react-router-dom";
import axios from "axios";

export default function RegisterComponent(){
    const [email,setEmail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:4000/auth/register",{email,username,password}).then((res)=>{
            if(res.data=="account created successfully"){
                console.log(res.data)
                window.location.href="/login"
                
            }
            else{
                alert(res.data)
            }
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return(
        <div id="form1">
            <form className="form">
            <span id="regspan">Create Account</span>
                <div id="div1">
                    <div className="form-group formsgroup1">
                        <i class="fas fa-user icons1"></i>
                        <input type="text" className="form-control" id="exampleInputusername1" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <i class="fas fa-envelope icons1"></i>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <i class="fas fa-lock icons1"></i>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                <button type="submit" className="btn btn-primary " id="submit1" onClick={handleSubmit}>Submit</button>
                <Link to="/login" id="already">Already have account? Login</Link>
                </div>
                
            </form>
        </div>
    )
}