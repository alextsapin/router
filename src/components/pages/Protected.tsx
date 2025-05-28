/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
    children: ReactElement
}

export const Protected = ({children}: Props) => {
    const logged = false;
    return logged ? children : <Navigate to='/error'/>
};
