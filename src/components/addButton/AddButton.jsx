import React from 'react'
import "./addButton.css"
import { Link} from "react-router-dom";


export default function AddButton() {
    return (
        <div>
            <Link to="/add">
                <button className="addBottlesBTN">Add Bottles</button>
            </Link>
        </div>
    )
}
