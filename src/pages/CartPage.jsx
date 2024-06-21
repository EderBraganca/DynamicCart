import React, {useEffect, useState} from "react";
import { Item } from "../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/slicer";
import { Link } from "react-router-dom";
import '../App.css';

export const CartPage = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal();
    }, [cart]);

    const clearCart = () => {
        dispatch(clear());
    }

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.valor * item.quantity;
        });
        setTotal(total);
    }

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <Item item={item} showIncrement={true}/>
                </div>
            ))}
            <nav className="navSection">
                <p className="totalTitle">Total: ${total.toFixed(2)}</p>
                <button onClick={clearCart} className="navButtons">Clear Cart</button>
                <Link to="/">
                    <button className="navButtons" >Home</button>
                </Link>
            </nav>
        </div>
    );
}