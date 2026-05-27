import { MAIN_LOGO_URL } from "../utils/contents";

const Header = () => {
    return (
        <>
         <div className="header">
                <div 
                    className="logo">
                    <img 
                    src = {MAIN_LOGO_URL}></img>
                </div>
                <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
               
        </>
    );
}

export default Header;