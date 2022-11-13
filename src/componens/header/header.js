import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header--general">
                    <h1>StayHealthy</h1>
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Program</a>
                        <a href="#">Nutritions</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                    </nav>
                    <button>Join Now</button>
                </div>
            </div>
        </header>

    );
};

export default Header;