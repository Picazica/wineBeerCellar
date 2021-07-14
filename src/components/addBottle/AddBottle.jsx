import {React, useState} from 'react'
import "./addBottle.css"

export default function AddBottle({setNewBottle}) {
    const[bottleDetail, setBottleDetail]=useState({name:"", img:"https://i.imgur.com/kerRI0w.jpg", description: "", type: "",  price:""});

    const onChange= (e)=>{
        setBottleDetail({...bottleDetail, [e.target.name]: e.target.value})
    }
    
    const createBottle = (e) =>{
        e.preventDefault();
        setNewBottle(bottleDetail);
    }

    return (
        <div className="addBottle">
            <form className="bottle" onSubmit={createBottle}> 
                <label>Type of Bottle</label>
                <select className="selection" name="type" required="required" id="active" onChange={onChange} >
                    <option >Select type of bottle</option>
                    <option value="1">Wine</option>
                    <option value="2">Beer</option>
                </select>
                <label>Product name</label>
                <input className="inputt"  type="text" required="required" onChange={onChange} name="name"/>
                <label>Product description</label>
                <input className="inputt"  type="text" required="required" onChange={onChange} name="description"/>
                <label>Average price</label>
                <input className="inputt"  type="text" required="required" onChange={onChange} name="price"/>
                <input className="inputBTN" type="submit" value="Save"/>
            </form>
            
        </div>
    )
}
