import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, title, description, price, image }) => {
  return (
    <div className="itemDetailContainer">
      <div className="itemDetailHeader">
        <div className="itemDetailImage">
          <img src={image} alt={title} />
        </div>
        <div className="itemDetailContent">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
      </div>
      <div className="itemDetailDescription">
        <h3>Descripción</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
