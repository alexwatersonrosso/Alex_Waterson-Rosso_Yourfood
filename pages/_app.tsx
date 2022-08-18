// @ts-ignore
// @ts-ignore
// @ts-ignore

import {GetServerSideProps, NextPage, PreviewData} from 'next'
import type {AppProps} from "next/app";
import Stripe from 'stripe'
import '../styles/globals.css'
import {CartContextProps} from "../components/context/CartContext";
import {useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const [items, setItems] = useState<Stripe.price[]>(initialState)
    let = (id: string) => {
        let i = _.reject(items, predicate, (item) => {
            return item.id === id;
            {
                setItems(i)
            }


            const add = (p: Stripe.Price) => {
                let i = _.union(items, [p]);
                setItems(i);
            };
            const cartContext: CartContextProps = {
                items: items,
                add: add,
                remove: remove
            };


            return {
                Component: {...pageProps}

            }
        }
