import React from "react";
import { createBrowserRouter } from "react-router-dom";

import RedirectionRoute from '../components/route/RedirectionRoute';
import ProtectedRoute from '../components/route/ProtectedRoute';

// layouts
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";

// pages
import Main from "../pages/Main";
import About from "../pages/About";
import Community from "../pages/Community";
import Disease from "../pages/Disease";
import Test from "../pages/Test"


const Router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <RedirectionRoute />,
        },
        {
            path: '/index',
            element: <Main />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '/community',
            element: <Community />,
        },
        {
            path: '/disease',
            element: <Disease />,
        },
        {
            path: '/test',
            element: <Test />
        }
    ]
}]);

export default Router;
