import React from "react";
import "./List.css"
import storeData from "../StoreData.json"


function Store({ name, address, image }) {
    return (
        <div>
            <img className="crop" src={image} alt={name} />
            <h3>{name}</h3>
            <h3>{address}</h3>
        </div>
    );
}

class List extends React.Component {
    render() {
        return (
            <div>
                {storeData.map(store => (
                    <Store key={store.id} name={store.name} address={store.address} image={store.image} />
                ))}
            </div>
        );
    }
}
export default List;