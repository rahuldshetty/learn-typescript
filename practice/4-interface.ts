interface Product {
    id: number,
    name: string,
    price: number
}

function getProduct(id: number): Product{
    return {
        id: id,
        name: `Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs ${product.price}`);
