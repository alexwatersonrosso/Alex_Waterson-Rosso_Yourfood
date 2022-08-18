// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {json} from 'stream/consumers'

import Stripe from 'stripe'

type Data = {
    session?: Stripe.Checkout.Session
    message?: string
}

type LineItem = {
    price: string
    quantity: number
}
type Req = {
    lineItems: LineItem[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method != 'POST') {
        res.status(statusCode
    :
        405
    ).
        json(body
    :
        {
            message:'POST METHOD REQUIRED'
        }
    )

    }
    try {
        const body: Req = JSON.parse(req.body);

        const stripe = new Stripe(key
        'sk_test_51LOrwnKNkWwS7FOTGePfJppP7oAcfVf7ftIfenIbRhWNuBpeJygIiFVclT3zaIvl9uwQuTjatHbB3rC3lLRhDBnb00NVEjnD5L'
    )
        const session = await stripe.checkout.sessions.create(params
    :
        {
            success_url: 'http://localhost:3000/success',
                cancel_url
        :
            'http://localhost:3000/cancel',
                line_items
        :
            body.lineItems,
                mode
        :
            'payment'

        }
    )
        ;

        res.status(201).json(body
    :
        {
            session
        }
    )
        ;

    } catch (e) {
        res.status(statusCode
    :
        500
    ).
        json(body
    :
        {
            message: e.message
        }
    )
    }

}

