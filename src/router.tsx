import * as React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";
import { Admin } from "./components/pages/Admin";
import { Error404 } from "./components/pages/Error404";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Nike } from "./components/pages/Nike";
import { Price } from "./components/pages/Price";
import { Model } from "./components/pages/Model";
import { Protected } from "./components/pages/Protected";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to='/error'/>,
        children: [
            {
                path: '/admin',
                element: <Protected><Admin/></Protected>
            },
            {
                path: '/adidas',
                element: <Adidas/>
            },
            {
                path: '/puma',
                element: <Puma/>
            },
            {
                path: '/nike',
                element: <Nike/>
            },
            {
                path: '/prices',
                element: <Price/>
            },
            {
                path: '/:model/:id',
                element: <Model/>
            },
            {
                path: '/error',
                element: <Error404/>
            }
        ]
    },
]);
