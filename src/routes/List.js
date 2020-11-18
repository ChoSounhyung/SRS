import React from "react";
import storeData from "../StoreData.json"

function Store({ name, address }) {
    return (
        <div>
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
                    <Store key={store.id} name={store.name} address={store.address} />
                ))}
            </div>
        );
    }
}
export default List;