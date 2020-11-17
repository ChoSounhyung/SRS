import React from 'react';
import {Link} from "react-router-dom";

import "./Navigation.css"

const nav_menu = ["LIST", "SMTI"]

class Navigation extends React.Component {
    render() {
        const textDecoration = {
            textDecoration: 'underline #3CB432',
        };
    
        return (
            <div className="nav">
                <Link to="/list" className="nav_text" id="lsit">LIST</Link>
                <Link to="/smti" className="nav_text" id="smti">SMTI</Link>
            </div>
        );
    }
}

export default Navigation;