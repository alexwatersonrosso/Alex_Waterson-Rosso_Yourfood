import {NextPage} from 'next'

import Stripe from 'stripe'
import Home from "./_app";
import * as module from "module";
import Price = module;


export const getServerSideProps = async () => {
    const stripe = new Stripe("sk_test_51LOrwnKNkWwS7FOTGePfJppP7oAcfVf7ftIfenIbRhWNuBpeJygIiFVclT3zaIvl9uwQuTjatHbB3rC3lLRhDBnb00NVEjnD5L");

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: "gbp"
    });
    const response = await stripe.prices.list(params)
    {
        limit:5;
        expand: ['data.product']

    }
)
    ;
    const prices = response.data.filter(price => {
        return price.active;
    })
    return {
        props: {
            prices
        }
    }
    type Props = {
        prices: Stripe.Price[]
    }

    const Home: NextPage<Props> = {Price: Price}
=>
    {
        return (

        )
    }
}
export default Home








