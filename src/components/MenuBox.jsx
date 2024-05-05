import "./MenuBox.css";

export default function MenuBar() {
    return (
        <div className="menubox">
            <ul className="list-container">
                <li className="list-item-add">Add</li>
                <li className="list-item-search">Search</li>
                <li className="list-item-tags">Tags</li>
                <li className="list-item-aboutus">About Us</li>
            </ul>
        </div>
    )
}