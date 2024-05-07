import "./MenuBox.css";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function MenuBar({ handleSearchBar }) {

    

    return (
        <div className="menubox">
            <ul className="list-container">
                <Link style={{ "textDecoration": "none" }} to="/notes/new">
                    <li className="list-item-add">Add</li>
                </Link>
                <Link to="/" style={{ "textDecoration": "none" }}>
                    <li onClick={handleSearchBar} className="list-item-search">Home</li>
                </Link>
                <li className="list-item-tags">Tags</li>
                <li className="list-item-aboutus">About Us</li>
            </ul>
            
        </div>
    )
}