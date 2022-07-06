import {useState} from 'react'
import  "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const incrementar = () => {
        setCount(count + 1);
    };

    const descrementar = () => {
        setCount( (valAnt) => (valAnt > 0 ? count - 1 : count));
    };

    return (
        <div className='contador'>
            <h3 className='titulo'>{count}</h3>
            <div className='botones'>
                <button onClick={descrementar} className='botonUno'>-</button>
                <button onClick={incrementar} className='botonUno'>+</button>
                <button
                    onClick={() => {
                        if (count <= stock) {
                            onAdd(count);
                        }
                        else{
                            alert(`No hay suficientes productos`);
                        }
                    }}
                    className='botonUno'>
                        Agregar al carrito
                </button>
            </div>    
        </div>
        );
};

export default ItemCount;