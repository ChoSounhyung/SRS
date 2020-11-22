import React from 'react';
import {Link} from "react-router-dom";

import "./Navigation.css"
import srs from "../image/srs_icon.png"

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav_container">
                <Link to="/#"><img className="srs" src={srs}/></Link>
                <div className="menu_container">
                    <Link to="/list" className="nav_text" id="menu">LIST</Link>
                    <Link to="/smti" className="nav_text" id="menu">SMTI</Link>
                </div>
            </div>
        );
    }
}

export default Navigation;