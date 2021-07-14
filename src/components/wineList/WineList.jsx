import React from 'react'
import "./wineList.css"
import { Link} from "react-router-dom";

export default function WineList({size}) {

    return (
        <div className="wineList">
            <h1 className="wine">Wine Cellar preview</h1>
            <h3>Quantity: {size} bottles</h3>
            <div className="buttons">
                <Link to="/wineDetails">
                    <button className="detailsBTN">Details</button>
                </Link>
            </div>
        </div>
    )
}
