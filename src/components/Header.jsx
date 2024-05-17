import React from "react";
import logoSvg from "../assets/img/pizza-logo.svg"; // Importing the pizza logo image

// Header component for the application
function Header() {
    return (
        <div className="header">
            <div className="container"> {/* Container for centering and padding content */}
                <div className="header__logo">
                    {/* Pizza logo with alt text */}
                    <img width="38" src={logoSvg} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1> {/* Main heading */}
                        <p>самая вкусная пицца во вселенной</p> {/* Subheading in Russian */}
                    </div>
                </div>
                <div className="header__cart">
                    {/* Shopping cart button */}
                    <a href="/cart.html" className="button button--cart">
                        <span>520 ₽</span> {/* Cart total price */}
                        <div className="button__delimiter"></div> {/* Separator between price and cart icon */}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Shopping cart icon */}
                            ...
                        </svg>
                        <span>3</span> {/* Number of items in the cart */}
                    </a>
                </div>
            </div>
        </div>
    )
}

// Exporting the Header component for use in other files
export default Header;
