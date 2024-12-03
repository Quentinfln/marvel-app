import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <h1>Marvel App</h1>
                <nav>
                    <NavLink to="/">Home</NavLink> - <NavLink to="/compare">Compare</NavLink> - <NavLink to="/about">About</NavLink> - <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Marvel App - 2024</p>
            </footer>
        </>
    );
};

export default Layout;