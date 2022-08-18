import Stripe from 'stripe';
import {FunctionComponent, useContext} from "react";
import {getPriceTotal, getProductImage, getProductName} from "../../utils/computed";
import CartContext from "../context/CartContext"
import {any} from "prop-types";


type CardProps = {
    price: Stripe.Price
}


const Card: FunctionComponent<CardProps> = ({price: price}) => {
    const {add} = useContext(CartContext);

    const addToCart = (p: Stripe.Price) => {
        if (add) {
            add(p)
        }
    }


    const Card: FunctionComponent<CardProps> = ({price, Price}) => {
        const {add} = useContext(CartContext);
        const addToCart = (p: Stripe.Price) => {
            if (add) {
                add(p)
            }
        }
        return (
            <div>
                <div className="relative">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <img
                            src={getProductImage(price.product)}
                            alt={price.product.description}
                            className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="relative mt-4">
                        <h3 className="text-sm font-medium text-gray-900">{getProductName(price.product)}</h3>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-center"></div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black-gradient ">
                        <p className="relative text-lg font-bold text-white">
                            ${getPriceTotal(price)}
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        onClick={() => addToCart(price)}
                        className="relative w-full flex bg-grey-200 border">

                        Add to bag<span className="sr-only">, {getProductName(any))>
                        ))</span>
                        </button>





                        </div>


                    }
                        }


