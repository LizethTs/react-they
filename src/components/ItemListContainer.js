import React, { useEffect, useState } from "react";
/*import ItemCount from "./ItemCount";*/
import ItemList from "./ItemList";
import products from "../products.json";

const ItemListContainer = ({ greeting }) => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 2000);
  });

  // if(!loading){
  //     return "loading..."
  // }

  return (
    <div style={{ backgroundColor: "#EBEBEB", padding: "0 20px" }}>
     <h2 style={{fontSize: "36px", fontWeight: "400", padding: "30px" }}>{greeting}</h2>
      {/* <ItemCount
        stock={5}
        initial={1}
        onAdd={(n) => alert(`Agregados ${n} productos`)}
      /> */}
      {!loading ? <p>loading...</p> : <ItemList items={products} />}
    </div>
  );
};

export default ItemListContainer;
