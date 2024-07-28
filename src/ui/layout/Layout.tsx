import React from 'react';
import { MainHeader } from '../header';
import { MainFooter } from '../footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <React.Fragment>
            <MainHeader />
            <div className='bg-white dark:bg-gray-950'>
                <Outlet />
            </div>
            <MainFooter />
        </React.Fragment>
    );
}

export default Layout
