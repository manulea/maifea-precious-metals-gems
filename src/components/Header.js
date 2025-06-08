import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>Maifea Precious Metals and Gems</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;