/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {lazy, useState} from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { Adidas } from './components/pages/Adidas';
import { PageThree } from './components/pages/Abibas';
import { PageTwo } from './components/pages/Puma';
import { Price } from './components/pages/Price';
import styles from "./components/Site.module.css";
import { Model } from './components/pages/Model';

const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavLink to="/adidas" className={({isActive}) => isActive ? 'active' : ''}>Adidas</NavLink>
                    <NavLink to="/puma">Puma</NavLink>
                    <NavLink to="/abibas">Abibas</NavLink>
                    <NavLink to="/prices">Цены для оптовиков</NavLink>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
