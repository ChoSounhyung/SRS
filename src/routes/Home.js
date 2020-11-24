import React from "react";
import "./Home.css"

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <p className="title"><small>This stop is </small>Sinsa-ri Station</p>
                <p>별빛이 내리는 신림 사거리, 별빛 신사리
                    도림천을 활용하여 반짝이는 즐거움이 흐르는 공간으로
                    신림의 다양한 먹거리로 입속 즐거움을 채우는 공간으로
                    신림에 살아가는 사람들의 시간이 숨쉬는 공간으로
                    별똥별처럼 지나간 삶의 이야기와
                    새로 태어나는 별의 이야기가 계속되는
                    별빛이 내리는 신림 사거리
                    여러분이 신림 사거리를 반짝반짝 빛내주세요!
                </p>
            </div>
        );
    }
}

export default Home;