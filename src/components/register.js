import React,{useState} from "react";
import "../styles/registerStyles.css"
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function RegisterComponent(){
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [nationalId,setNationalId]=useState("")
    const [phoneNumber,setphoneNumber]=useState("")
    const [email,setEmail]=useState("")
    const [department,setDepartment]=useState("")
    const [position,setPosition]=useState("")
    const [laptopManufacture,setManufacture]=useState("")
    const [model,setModel]=useState("")
    const [serialNumber,setSerialNumber]=useState("")
    const Navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:4000/employees/register",{firstname:firstname,lastname:lastname,nationalId:nationalId,phoneNumber:phoneNumber,email:email,department:department,position:position,laptopManufacture:laptopManufacture,model:model,serialNumber:serialNumber}).then((res)=>{
            if(res.data=="successfully registered employee"){
                alert("successfully registered employee")
                const token=Cookies.get("token")
                Cookies.set("token")
                Navigate("/list")
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
                        <input type="text" className="form-control" id="exampleInputusername1" placeholder="Firstname" value={firstname} onChange={e=>setFirstname(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Lastname" value={lastname} onChange={e=>setLastname(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="NationalId" value={nationalId} onChange={e=>setNationalId(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" value={phoneNumber} onChange={e=>setphoneNumber(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Department" value={department} onChange={e=>setDepartment(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Position" value={position} onChange={e=>setPosition(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Laptop Manufacturer" value={laptopManufacture} onChange={e=>setManufacture(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Model" value={model} onChange={e=>setModel(e.target.value)}/>
                    </div>
                    <div className="form-group formsgroup1">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Serial Number" value={serialNumber} onChange={e=>setSerialNumber(e.target.value)}/>
                    </div>
                <button type="submit" className="btn btn-primary " id="submit1" onClick={handleSubmit}>Submit</button>
                <button type="submit" className="btn btn-primary " id="submit1">
                    <Link to="/list" id="li">View registered Employees</Link></button>
                </div>
                
            </form>
            
        </div>
    )
}