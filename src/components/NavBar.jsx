import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import MenuBox from "./MenuBox.jsx";


export default function NavBar() {

    const [menu, setMenu] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    

    function handleMenu() {
        setMenu(!menu);
    }

    function handleSearchBar() {
        setSearchBar(!searchBar);
    }

    return (
        <div className="navbar">
            <img onClick={handleMenu} className="menu-icon" src="src/assets/menu1.png"/>
            <Link style= {{color: "white"}} to="/"><p className="title">Clever Note .</p></Link>
            {menu ? <MenuBox handleSearchBar={handleSearchBar}/> : null}
            {searchBar ? <input className="search-bar" type="search" placeholder="Search..."/> : null}
        </div>
    )
}