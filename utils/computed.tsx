export function CartContext() {
}

export function getProductName(product: any) {
    return product?.name;
}

export function getProductImage(product: any) {
    return product?.images[0]
}

export const getProductDesription = (product: any) => product?.description ?? '';

export function getPriceTotal(price: any) {
    return (price.unit_amount / 100)
}
