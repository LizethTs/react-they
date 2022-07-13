import React from "react";
import "./Item.css";

const Item = ({ id, title, description, price, image} ) => {
    return (
        <div className="itemContainer">
            <div className="imageContainer">
                <img src={image} alt={title} className="imageStyle"/>
            </div>
            <h3>{title}</h3>
            <p>{description.substr(0,20)}</p>
            <p>{price}</p>
        </div>
    );
};
 
export default Item;