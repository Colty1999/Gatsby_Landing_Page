
import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Navbar: React.FC = () => {
    const data = useStaticQuery(graphql`  
    {
        site{
            siteMetadata {
                title
            }
        }
    }
    `);
    
    const {title} = data.site.siteMetadata;

    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    );
};

export default Navbar;
