import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({item}) => {
  const [loading, setLoading] = useState(false);
  const [itemDetail, setItemDetail] = useState({});

  console.log(item)
  useEffect(() => {
    function getItem(){
        setTimeout(() => {
            setItemDetail(item);
            setLoading(true);
          }, 2000);
    }
    getItem();
  });

  return (
    <div style={{ backgroundColor: "#EBEBEB", padding: "0 20px" }}>
     <h2 style={{fontSize: "36px", fontWeight: "400", padding: "30px" }}>Producto:</h2>
      {!loading ? <p>loading...</p> : <ItemDetail {...itemDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
