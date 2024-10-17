'use client';

import { FarmCardProps } from '@/types';
import React, { createContext, useContext, useState } from 'react';

interface CartListType extends FarmCardProps {
    quantity: number
}

type CartContext = any | {
    cartList: CartListType[]
    setCartList?: React.Dispatch<React.SetStateAction<CartListType[]>>
    cartTotal: number
    setCartTotal?: React.Dispatch<number>
}

const defaultCartContext: CartContext = {
    cartList: new Array<CartListType>(),
    cartTotal: 0
}

const CartContext = createContext<CartContext>(defaultCartContext);




export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cartList, setCartList] = useState<CartListType[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);

    return (
        <CartContext.Provider value={{
            cartList,
            setCartList,
            cartTotal,
            setCartTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}



export default function useCart() {

    const { cartList, setCartList, cartTotal, setCartTotal } = useContext(CartContext);

    const addItemToCartList = (farmDetails: FarmCardProps) => {
        setCartList?.((prev: CartListType[]) => [...prev, farmDetails]);
    }

    const removeItemFromCartList = (idx: number) => {
        if (!(Math.abs(idx) < cartList.length)) return;
        setCartList((prev: CartListType[]) => prev.splice(idx, 1))
    }

    const increaseQuantity = (idx: number) => {
        if (!(Math.abs(idx) < cartList.length)) return;
        setCartList?.((prev: CartListType[]) => {
            const itemById = prev[idx];
            const newQty = itemById.quantity++;
            const updatedItem = { ...itemById, quantity: newQty } // TODO: make maximum quantity check
            prev.splice(idx, 1, updatedItem);
        })
        setCartTotal?.(calculateTotal(cartList));
    }

    const decreaseQuantity = (idx: number) => {
        if (!(Math.abs(idx) < cartList.length)) return;
        setCartList?.((prev: CartListType[]) => {
            const itemById = prev[idx];
            const newQty = itemById.quantity--;
            const updatedItem = { ...itemById, quantity: newQty } // TODO: make minimum quantity check
            prev.splice(idx, 1, updatedItem);
        })
        setCartTotal?.(calculateTotal(cartList));
    }

    const calculateTotal = (cartItems: CartListType[]) => {
        return cartItems.reduce((accumulator, currentItem, curIdx) => {

            accumulator += currentItem.quantity * (currentItem.cost || 0)

            return accumulator;
        }, 0)
    }

    return Object.freeze({
        cartTotal,
        cartList,
        addItemToCartList,
        removeItemFromCartList,
        increaseQuantity,
        decreaseQuantity
    })
}