/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import App from "./App";
import { Error404 } from "./components/pages/Error404";
import { Adidas } from "./components/pages/Adidas";
import { PageTwo } from "./components/pages/Puma";
import { PageThree } from "./components/pages/Abibas";
import { Price } from "./components/pages/Price";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/adidas',
                element: <Adidas/>
            },
            {
                path: '/puma',
                element: <PageTwo/>
            },
            {
                path: '/abibas',
                element: <PageThree/>
            },
            {
                path: '/prives',
                element: <Price/>
            }
        ]
    },
]);
