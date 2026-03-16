/* eslint-disable react-refresh/only-export-components */

import React from 'react'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartlist, setcartList] = useState([]);

    const iscartlisted = (id) => cartlist.some((w) => w.id === id);

    const togglecartlist = (item) => {
        setcartList((prev) =>
            prev.find((w) => w.id === item.id)
                ? prev.filter((w) => w.id !== item.id)
                : [...prev, item],
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartlist,
                setcartList,
                iscartlisted,
                togglecartlist
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartList = () => useContext(CartContext)
