import {createContext} from 'react';
import Stripe from 'stripe'

export type CartContextProps = {
    items?: Stripe.Price[],
    remove?: (id: string) => void
    add?: (p: Stripe.Price) => void
}

const cartContextProps: CartContextProps = {};

const contextProps = cartContextProps;
const CartContext = createContext(contextProps);

export default contextProps;