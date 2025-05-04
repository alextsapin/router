/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { Adidas } from './components/pages/Adidas';
import { PageThree } from './components/pages/Abibas';
import { PageTwo } from './components/pages/Puma';
import { Price } from './components/pages/Price';
import styles from "./components/Site.module.css";
import { Model } from './components/pages/Model';

function App() {
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
                    <Routes>
                        <Route path="/" element={<Navigate to="/adidas"/>}/>
                        <Route path="/adidas" element={<Adidas/>}/>
                        <Route path="/adidas/:id" element={<Model/>}/>
                        <Route path="/puma" element={<PageTwo/>}/>
                        <Route path="/abibas" element={<PageThree/>}/>
                        <Route path="/prices" element={<Price/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
