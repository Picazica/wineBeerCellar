import React from 'react'
import "./details.css"

export default function Details({data,type}) {
    return (
        <div className="container">
            <form className="search">
                <label>Search for a bottle</label>
                <input type="text" />
            </form>
            <div className="listof">
                <ul>
                    {data.map(item=>{
                        return<li className="listof">
                            <h2 className={type==="wine" ? "wine" : "beer"}>{item.name}</h2>
                            <img src={item.img} alt="img" className="image"/>
                            <p>{item.description}</p>
                            <h4>{item.price}€</h4>
                            <button className="removeBottleBTN">Remove bottle</button>
                            </li>
                        })}
                </ul>
            </div>
        </div>
    )
}
