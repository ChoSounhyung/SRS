import React from "react";
import "./List.css"
import storeData from "../StoreData.json"

function Store({ name, address, image }) {
    return (
        <div className="green_box" id="green_box_container">
            <img className="crop" src={image} alt={name} />
            <div className="content">
                <h3 id="name">{name}</h3>
                <h3 id="address">{address}</h3>
            </div>
        </div>
    );
}

class List extends React.Component {
    render() {
        return (
            <div className={"list_container"} id="container_margin">
                {storeData.map(store => (
                    <Store key={store.id} name={store.name} address={store.address} image={store.image} />
                ))}
            </div>
        );
    }
}
export default List;