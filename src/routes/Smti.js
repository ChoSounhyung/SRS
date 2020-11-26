import React from "react";
import "./Smti.css";

class Smti extends React.Component {
    render() {
        return <div id="smti_container">
            <div className="quiz_container">
                <h1>엽떡 맵기를 고를 때 나는</h1>
                <div className="select_container">
                    <div className={"select_box"}>
                        맵찔이지만 허세부리며 중간맛을 고른다
                    </div>
                    <div className={"select_box"}>
                        맵찔이지만 허세부리며 중간맛을 고른다
                    </div>
                </div>
            </div>
            <div className="progress_bar">
                {[1, 2, 3, 4, 5, 6].map((n) => 
                    <div className="circle" />
                )}
            </div>
        </div>
    }
}

export default Smti;