import React from 'react'
import "./topBar.css"
import { Settings} from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { Link} from "react-router-dom";



export default function TopBar() {
    return (
        <div className="frontPage">
             <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <Link to="/">
                        <HomeIcon/>
                    </Link>
                </div>
                <div className="topright">
                    <div className="iconContainer"> 
                    <Link to="/about">
                        <InfoIcon/>
                    </Link>
                    </div>
                    <div className="iconContainer">
                    <Link to="/settings">
                        <Settings/>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
