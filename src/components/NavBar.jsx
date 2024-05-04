import "./NavBar.css";
import { useState } from "react";

import MenuBox from "./MenuBox.jsx";

export default function NavBar() {

    const [menu, setMenu] = useState(false);

    function handleMenu() {
        setMenu(!menu);
    }

    return (
        <div className="navbar">
            <img onClick={handleMenu} className="menu-icon" src="src/assets/menu-bar.png"/>
            <p className="title">Clever Note .</p>
            {menu ? <MenuBox/> : null}
        </div>
    )
}