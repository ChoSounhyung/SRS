import React from "react";
import "./List.css"
import storeData from "../StoreData.json"

function Store({ name, address, image, link }) {
    return (
        <a href={link} id="link" onClick={() => {console.log('link was clicked');}}>
        <div className="green_box" id="green_box_container">
            <img className="crop" src={image} alt={name} />
            <div className="content">
                <h3 id="name">{name}</h3>
                <h3 id="address">{address}</h3>
            </div>
        </div>
        </a>
    );
}

class List extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">신사리 상점 리스트</h1>
                <div className={"list_container"} id="container_margin">
                    {storeData.map(store => (
                        <Store key={store.id} name={store.name} address={store.address} image={store.image} link={store.link} />
                    ))}
                </div>
            </div>
            
        );
    }
}
export default List;