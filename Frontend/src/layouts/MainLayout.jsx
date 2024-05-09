import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../core/user';
import Header from '../components/header/Header';

import Footer from '../components/footer/Footer';

const MainLayout = () => {

    return (
        <div className="flex flex-col relative min-h-screen">
            <Header />
            <div className="flex flex-grow">
                
                <main className="flex-grow p-2 overfslow-auto">
                    <div className="flex flex-col w-full h-full space-y-2">
                        <div className="flex flex-col justify-start w-full h-full flex-grow">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default MainLayout;
