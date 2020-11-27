import React from "react";
import "./Result.css";

import resultData from "../data/result_data.json"

// image
import skate from "../image/result/1.png"
import ramen from "../image/result/2.png";
import meat from "../image/result/3.png"
import chicken from "../image/result/4.png"
import coffee from "../image/result/5.png"
import rice from "../image/result/6.png"
import stew from "../image/result/7.png"
import tteokgalbi from "../image/result/8.png"
import sundae from "../image/result/9.png"
import shu from "../image/result/10.png"

class Result extends React.Component {
    state = {
        images: [
            skate,
            ramen,
            meat, 
            chicken, 
            coffee, 
            rice, 
            stew, 
            tteokgalbi, 
            sundae, 
            shu
        ],
        id: this.props.match.params.id,
        data: resultData
    }

    render() {
        const { images, id, data } = this.state;
        return (
            <div id="result_container">
                <div className="card_box">
                    <span className="desc_type">{data[id].title}</span>
                    <h1 className="text_type">{data[id].name}</h1>
                    <img src={images[id]} className="img_type" alt={"type"} />
                    <div className="content_type">
                        {data[id].contents.map((text, index) => (
                            <span key={index} className="text_content">{text}</span>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;