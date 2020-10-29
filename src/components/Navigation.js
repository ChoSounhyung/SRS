import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/sangjum_list">Sangjum_List</Link>
            <Link to="/card_game">Card_Game</Link>
        </div>
    );
}

export default Navigation;