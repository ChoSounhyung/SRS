import React from 'react';
import {Link} from "react-router-dom";

import "./Navigation.css"

function Navigation() {
    return (
        <div className="parent">
            <div className="box" id="s_list">
                <Link className="hiper" to="/sangjum_list">상점 리스트</Link>
            </div>
            <div className="box" id="c_game">
                <Link className="hiper" to="/card_game">카드 게임</Link>
            </div>
        </div>
    );
}

export default Navigation;