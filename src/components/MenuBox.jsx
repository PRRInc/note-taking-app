import "./MenuBox.css";
import { Link } from "react-router-dom";

export default function MenuBar() {
    return (
        <div className="menubox">
            <ul className="list-container">
                <Link to="/notes/new">
                <li className="list-item-add">Add</li>
                </Link>
                <li className="list-item-search">Search</li>
                <li className="list-item-tags">Tags</li>
                <li className="list-item-aboutus">About Us</li>
            </ul>
        </div>
    )
}