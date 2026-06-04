import React, { useState } from "react";

// Header Component
const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

const clickHandler = () => {
    setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
};

    return (
        <>
         <div className="header">
                <div 
                    className="logo">
                    <img 
                    src = "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:6e351717-a10f-5cbc-9a9a-794240ca61c4/component?assetType=TEMPLATE&etag=789ec321b1294d1dbbe7a3ee3dfac43a&revision=10d836af-5c0a-4a03-8727-2dc19667ace5&component_id=3d636883-3014-4016-b23f-f74b12e8adb3"></img>
                </div>
                <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Cart</li>
                    <li
                    className= "login-btn"
                    onClick = {() =>{
                        clickHandler();
                    }}
                    >
                    {loginBtn}
                    </li>

                </ul>
            </div>
        </div>
               
        </>
    );



}

export default Header;
