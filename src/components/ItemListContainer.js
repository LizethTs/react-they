import React, { useEffect, useState } from "react";
/*import ItemCount from "./ItemCount";*/
import ItemList from "./ItemList";
import products from "../products.json";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState();

  const fetchProducts = () => {
    const response = new Promise((resolve, rejection) => {
      resolve(products);
    });

    response
      .then((res) => {
        setItems(res);
      })
      .then(() => {
        setLoading(true);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const getItems = () => {
      setTimeout(() => {
        fetchProducts();
      }, 2000);
    };
    getItems();
  });

  return (
    <div style={{ backgroundColor: "#EBEBEB", padding: "0 20px" }}>
      <h2 style={{ fontSize: "36px", fontWeight: "400", padding: "30px" }}>
        {greeting}
      </h2>
      {/* <ItemCount
        stock={5}
        initial={1}
        onAdd={(n) => alert(`Agregados ${n} productos`)}
      /> */}
      {!loading ? <p>loading...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
