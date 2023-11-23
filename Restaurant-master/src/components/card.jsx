import React from "react";

function Card(props) {

    return (
            <div className="menu-card">
                <img src={props.url} alt={props.name} />
                <h1>{props.name}</h1>
                <p><b>Category:</b> {props.category}</p>
                <p><b>Price:</b> {props.price} INR</p>
            </div>
    );
}

export default Card;