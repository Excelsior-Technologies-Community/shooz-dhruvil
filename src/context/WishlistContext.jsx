/* eslint-disable react-refresh/only-export-components */

import React from 'react'
import { createContext, useContext, useState } from 'react'

const WishListContext = createContext(null);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setwishlist] = useState([]);

    const isWishlisted = (id) => wishlist.some((w) => w.id === id);

    const toggleWishlist = (item) => {
        setwishlist((prev) =>
            prev.find((w) => w.id === item.id)
                ? prev.filter((w) => w.id !== item.id)
                : [...prev, item],
        );
    };

    return (
        <WishListContext.Provider
            value={{
                wishlist,
                isWishlisted,
                toggleWishlist
            }}
        >
            {children}
        </WishListContext.Provider>
    )
}

export const useWishList = () => useContext(WishListContext)
