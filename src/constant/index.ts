import favLogo from "/public/assets/logo/fav.webp"
import karmaLogo from "/public/assets/logo/logo.png"
import shoesBanner from "/public/assets/products/banner-img.png"
import watchBanner from "/public/assets/products/watch.png"

import shippingImg from "/public/assets/collection/shipping.svg"
import paymentImg from "/public/assets/collection/payment.svg"
import returnImg from "/public/assets/collection/return.svg"

import c1 from "/public/assets/products/c1.jpg"
import c2 from "/public/assets/products/c2.jpg"
import c3 from "/public/assets/products/c3.jpg"
import c4 from "/public/assets/products/c4.jpg"
import c5 from "/public/assets/collection/c5.jpg"
import comingSoon from "/public/assets/collection/coming_soon.jpg"

import authBg from "/public/assets/collection/auth_bg.jpg"

import emptyCart from "/public/assets/collection//416097823087Zero_Purchase.gif"
import emptyProduct from "/public/assets/collection/emptyProduct.gif"
const SLIDERCONTENT = [
    {
        id: 1,
        img: shoesBanner,
        title: "Nike New Collection!",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates aperiam at deserunt laudantium fugiat vel, quia laboriosam rem blanditiis aut natus optio recusandae suscipit neque accusantium ullam esse atque."
    },
    {
        id: 2,
        img: watchBanner,
        title: "Select your new perfect style",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure."
    },
    {
        id: 3,
        img: shoesBanner,
        title: "Nike New Collection!",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates aperiam at deserunt laudantium fugiat vel, quia laboriosam rem blanditiis aut natus optio recusandae suscipit neque accusantium ullam esse atque."
    },
]
const OURFEATURES = [
    {
        id: 1,
        img: shippingImg,
        title: "Free Delivery",
        description: "Free Shipping on all order",
    },
    {
        id: 2,
        img: returnImg,
        title: "Return Policy",
        description: "Free Shipping on all order",
    },
    {
        id: 3,
        img: paymentImg,
        title: "Secure Payment",
        description: "Free Shipping on all order",
    },
]
const PRODUCTS = [
    {
        id: 1,
        image: "",
        title: "",
        description: "",
        isNew: true,
        price: 10,
        discount: 10,
        category: "",
        stock: 1000,
        reviews: 5,
        SKU: "",
        tag: ""
    },
    {
        id: 2,
        image: "",
        title: "",
        description: "",
        isNew: true,
        price: 10,
        discount: 10,
        category: "",
        stock: 1000,
        reviews: 5,
        SKU: "",
        tag: ""
    },
    {
        id: 3,
        image: "",
        title: "",
        description: "",
        isNew: true,
        price: 10,
        discount: 10,
        category: "",
        stock: 1000,
        reviews: 5,
        SKU: "",
        tag: ""
    },
]
const imgs = {
    favIcon: favLogo,
    karmaLogo,
    c1,
    c2,
    c3,
    c4,
    c5,
    authBg,
    emptyCart,
    emptyProduct,
    comingSoon
}


export { SLIDERCONTENT, OURFEATURES, PRODUCTS, imgs }