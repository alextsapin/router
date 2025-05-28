/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useParams } from 'react-router';
import {adidasArr} from './Adidas';
import { Error404 } from './Error404';

export const Model = () => {
    
    const {id} = useParams();
    const boot = adidasArr.find(b => b.id === Number(id))

    return (
        <div>
            {boot ?
            <div>
                <h1>{boot?.model}</h1>
                <img src={boot.picture} alt="boot"/>
            </div>
            : <Error404/>
            }
        </div>
    );
};

