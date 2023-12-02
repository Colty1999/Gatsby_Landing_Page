import React from 'react';
import Navbar from './navbar';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className='layout'>
            <Navbar />
            <div className='content'>
                {children}
            </div>
            <footer>
                <p>© 2021</p>
            </footer>
        </div>
    );
};

export default Layout;
