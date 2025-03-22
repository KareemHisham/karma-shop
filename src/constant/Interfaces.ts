interface ISliderContent {
    id: number,
    title: string,
    description: string,
    img: string,
}

interface ICategory {
    id: number,
    title: string,
    image: string,
    prefix: string,
}

interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string[],
    cat_prefix: string,
    rating: number | null,
    stock: number | null,
    isNew: boolean,
    SKU: string,
    discount: number
}

type IBreadcrum = {
    breadcrumLinks: {
        title: string;
        path: string;
    }[]
}



export type { ISliderContent, ICategory, IProduct, IBreadcrum }