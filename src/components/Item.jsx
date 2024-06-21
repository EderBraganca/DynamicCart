import React from 'react';
import { useDispatch } from 'react-redux';
import { add, remove, increment, decrement } from '../redux/slicer';
import '../App.css';

export const Item = ({ item , showIncrement}) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
    };

    const removeFromCart = () => {
        dispatch(remove(item));
    }    

    const incrementItem = (item) => {
        dispatch(increment(item));
    }

    const decrementItem = (item) => {
        dispatch(decrement(item));
    }

    return (
        <div>
            <div className="itemCard">
                <h3>{item.nome}</h3>
                <h4>${item.valor}</h4>
                <img src={item.imagem} alt={item.nome} />
                <nav>
                    <button onClick={addToCart} className='addButton'>Add</button>
                    <button onClick={removeFromCart} className='removeButton'>Remove</button>
                </nav>
                <nav className="incrementButtons">
                    <button onClick={() => decrementItem(item)} hidden={!showIncrement}>-</button>
                    {item.quantity && <p hidden={!showIncrement}>Quantity: {item.quantity}</p> }
                    <button onClick={() => incrementItem(item)} hidden={!showIncrement}>+</button>
                </nav>
            </div>
        </div>
    );
}