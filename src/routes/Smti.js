import React from "react";
import "./Smti.css";

// smti data
import smti_data from "../data/smti_data.json";
import { Redirect } from "react-router-dom";

class Smti extends React.Component {
    state = {
        datas: smti_data,
        currentIndex: 0
    }

    clickHandle = (evt) => {
        const result = evt.target.innerText;
        console.log(result);

        const { currentIndex, datas } = this.state;
        if (currentIndex != datas.length - 1) {
            this.setState({
                currentIndex: currentIndex + 1
            })
        } else {
            // Redirect
            const id = 1;
            const { history } = this.props;
            history.push(`/result/${id}`);
        }
    }

    render() {
        const { datas, currentIndex } = this.state;
        return <div id="smti_container">
            <div className="quiz_container">
                <h1>{datas[currentIndex].text}</h1>
                <div className="select_container">
                    {datas[currentIndex].examples.map((example) => (
                        <div className={"select_box"} onClick={this.clickHandle}>
                            {example}
                        </div>
                    ))}
                </div>
            </div>
            <div className="progress_bar">
                {datas.map((data, index) => 
                    <div className={index == currentIndex ? "circle active" : "circle"} />
                )}
            </div>
        </div>
    }
}

export default Smti;