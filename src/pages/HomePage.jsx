import React from "react";
import { Item } from "../components/Item";
import { products } from "../assets/products";
import { Link } from "react-router-dom";
import '../App.css';

export const HomePage = () => {
    return (
        <div>
            <h1>Products</h1>
            <Link to="/cart">
                <button className="navButtons" id="cart" >
                    Cart
                </button>
            </Link>
            {products.map((item) => (
                <Item key={item.id} item={item} showIncrement={false}/>
            ))}
        </div>
    );
}
