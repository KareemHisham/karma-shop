interface ISliderContent {
    id: number,
    title: string,
    description: string,
    img: string,
}

interface ICategory {
    id: number,
    name: string,
    image: string,
    prefix: string,
    sub_product: string[]
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
    is_new: boolean,
    SKU: string,
    discount: number,
    sizes: string[],
    colors: string[],
    tags: string[],
    brand: string
}

interface IUser {
    fullname: string,
    email: string,
    phone: number,
    address: string,
    accountID: string,
}

type IBreadcrum = {
    breadcrumLinks: {
        title: string;
        path: string;
    }[]
}
interface IHeadingForm {
    title: string,
    subTitle: string
}
interface IFooterForm {
    title: string,
    link: string,
    linkTitle: string
}


export type { ISliderContent, ICategory, IProduct, IUser, IBreadcrum, IHeadingForm, IFooterForm }