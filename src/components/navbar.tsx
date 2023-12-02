
import { Link } from 'gatsby';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <h1>Landing Page</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
        </nav>
    );
};

export default Navbar;
