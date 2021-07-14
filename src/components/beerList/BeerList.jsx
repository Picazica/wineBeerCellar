import React from 'react'
import "./beerList.css"
import { Link} from "react-router-dom";

export default function BeerList({size}) {
    return (
        <div className="beerList">
            <h1 className="beer">Beer Cellar preview</h1>
            <h3>Quantity: {size} bottles</h3>
            <div className="buttons">
                <Link to="/beerDetails">
                    <button className="detailsBTN">Details</button>
                </Link>
            </div>
        </div>
    )
}
