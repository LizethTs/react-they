import React from 'react'
import Item from './Item';
import "./ItemList.css";

const ItemList = ({items}) => {
    return (
       <div className='itemsContainer'>
            {items.map((element,index) => (
                <Item {...element} key={index}/>
            ))} 
        </div>
    );
};
 
export default ItemList;