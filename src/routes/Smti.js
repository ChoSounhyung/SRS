import React from "react";
import "./Smti.css";

// smti data
import smti_data from "../data/smti_data.json";

class Smti extends React.Component {
    state = {
        datas: smti_data,
        currentIndex: 0,
        checkList: {}
    }

    componentDidMount() {
        let checkListTemp;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 2; j++) {
                checkListTemp = {
                    ...checkListTemp,
                    [`${i}-${j}`]: 0
                }
            }
        }
        this.setState({
            checkList: checkListTemp
        })
    }

    clickHandle = (evt) => {
        const result = evt.target.innerText;
        this.setResult(result);

        const { currentIndex, datas, checkList } = this.state;
        if (currentIndex !== datas.length - 1) {
            this.setState({
                currentIndex: currentIndex + 1
            })
        } else {
            const types = [
                checkList["3-1"] + checkList["5-1"] + checkList["7-0"],
                checkList["2-1"] + checkList["3-1"] + checkList["5-1"] + checkList["6-1"] + checkList["7-1"],
                checkList["0-1"] + checkList["2-0"] + checkList["4-1"] + checkList["8-1"],
                checkList["2-0"] + checkList["3-1"] + checkList["5-1"] + checkList["8-0"],
                checkList["0-1"] + checkList["1-0"] + checkList["3-0"] + checkList["6-0"] + checkList["7-1"],
                checkList["1-1"] + checkList["5-1"] + checkList["6-1"] + checkList["8-0"] + checkList["8-1"],
                checkList["0-0"] + checkList["1-1"] + checkList["2-1"] + checkList["3-1"] + checkList["4-1"],
                checkList["0-1"] + checkList["2-0"] + checkList["3-0"] + checkList["7-1"] + checkList["8-1"],
                checkList["1-0"] + checkList["3-0"] + checkList["4-0"] + checkList["5-0"] + checkList["7-0"],
                checkList["0-1"] + checkList["1-1"] + checkList["4-0"] + checkList["5-1"] + checkList["6-1"],
            ]
            let id;
            const maxValue = Math.max(...types);
            for (let i = 0; i < types.length; i++) {
                const num = types[i];
                if (maxValue === num) {
                    id = i;
                    break;
                }
            }
            // Redirect
            const { history } = this.props;
            history.push(`/result/${id}`);
        }
    }

    setResult = (result) => {
        const { datas, checkList, currentIndex } = this.state;
        datas[currentIndex].examples.forEach((example, index) => {
            if (result === example) {
                const count = checkList[`${currentIndex}-${index}`];
                this.setState({
                    checkList: {
                        ...checkList,
                        [`${currentIndex}-${index}`]: count + 1
                    }
                })
            }
        });
    }

    render() {
        const { datas, currentIndex } = this.state;
        return <div id="smti_container">
            <div className="quiz_container">
                <h1>{datas[currentIndex].text}</h1>
                <div className="select_container">
                    {datas[currentIndex].examples.map((example, index) => (
                        <div key={index} className={"select_box"} onClick={this.clickHandle}>
                            {example}
                        </div>
                    ))}
                </div>
            </div>
            <div className="progress_bar">
                {datas.map((data, index) => 
                    <div key={index} className={index === currentIndex ? "circle active" : "circle"} />
                )}
            </div>
        </div>
    }
}

export default Smti;