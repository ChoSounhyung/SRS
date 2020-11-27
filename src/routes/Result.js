import React from "react";
import "./Result.css";

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
    render() {
        return (
            <div id="result_container">
                <div className="card_box">
                    <span className="desc_type">볼 수록 빠져드는 매력</span>
                    <h1 className="text_type">컵라면</h1>
                    <img src={ramen} className="img_type" />
                    <div className="content_type">
                        {["공감능력이 좋아서 상담을 잘 해줘요. 내 주변 사람이라면 내가 챙겨줄줄 알아야 된다고 생각해요.",
                        "남들 얼굴이나 이름도 잘 외우고 신경써줘요.",
                        "배려를 잘 해주고 감성적인 면이 발달해 있다면 현실적인 면도 발달해 있어서 계획을 잘 세우고 잘 지켜요."].map(text => (
                            <span className="text_content">{text}</span>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;