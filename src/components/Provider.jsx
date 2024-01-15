import React, { useState } from 'react'
import { createContext } from 'react';

export const LoaderContext = createContext();

const Provider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [dots, setDots] = useState(1);

    return (
        <LoaderContext.Provider value={{ isVisible, setIsVisible, dots, setDots }} >
            {children}
        </LoaderContext.Provider>
    )
}

export default Provider
