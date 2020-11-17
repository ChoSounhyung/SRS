import React from 'react';
import {Link} from "react-router-dom";

import "./Navigation.css"

function Navigation() {
    return (
        <div className="nav">
            <Link to="/list" className="nav_text" id="lsit">LIST</Link>
            <Link to="/smti" className="nav_text" id="smti">SMTI</Link>
        </div>
    );
}

export default Navigation;