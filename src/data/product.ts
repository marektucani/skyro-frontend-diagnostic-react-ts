export type Product = {
    id: number
    category: string
    name: string
    description: string
    price: number
    originalPrice: number
    currency: string
    inStock: boolean
    image: string
}

export const product: Product = {
    id: 1,
    category: 'Slúchadlá',
    name: 'Sony WH-1000XM6',
    description:
        'Prémiové bezdrôtové slúchadlá s aktívnym potlačením hluku a výdržou batérie až 30 hodín.',
    price: 399,
    originalPrice: 449,
    currency: '€',
    inStock: true,
    image: '/product-headphones.png',
}
