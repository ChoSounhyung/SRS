import React from 'react';
import {Link} from "react-router-dom";

import "./Navigation.css"

function Navigation() {
    return (
        <div>
            <Link to="/list">LIST</Link>
            <Link to="/smti">SMTI</Link>
        </div>
    );
}

export default Navigation;