import { useParams } from "react-router-dom";
import { useProductByIdQuery } from "@/lib/react-query/ProductsQuery";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductForm, Rating, Spinner } from "@/components";
import { toast } from "sonner"
import useTitleHook from "@/hooks/TitleHook";

const ProductInfo = () => {
    const { id } = useParams();

    const { data: product, isPending, error } = useProductByIdQuery(id as string);
    useTitleHook(product?.title as string);

    if (error) toast.error(error.message)

    const handleImgChange = (img: string) => {
        document.getElementById("main_img")?.setAttribute("src", img)
    }

    if (isPending) return <Spinner />

    return (
        <section className="py-4">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-20">
                    {/* Product Images */}
                    <div className="flex flex-col items-center gap-3 mb-10 md:mb-0">
                        <img src={product?.images[0]} alt={product?.title} loading="lazy" width={300} className="rounded-lg" id="main_img" />
                        <Carousel >
                            <CarouselContent>
                                {product?.images.map((img, i) => <CarouselItem key={i} className="basis-1/4">
                                    <img src={img} alt={product?.title} width={200} className="cursor-pointer" onClick={() => handleImgChange(img)} />
                                </CarouselItem>)}

                            </CarouselContent>
                            <CarouselPrevious className="left-0 border-0" />
                            <CarouselNext className="right-0 border-0" />
                        </Carousel>
                    </div>

                    {/* Product Info */}
                    <div className="col-span-2">
                        <h1 className="font-bold text-md">{product?.title}</h1>
                        {product?.brand_name && <h2>Brand: <span className="text-primary">{product?.brand_name}</span></h2>}
                        {product?.description && <p className="my-4 text-sm leading-6 text-gray">{product?.description}</p>}

                        <div className="mb-4">
                            <span>Price:</span>
                            {product?.discount ? (<div className="flex items-center gap-2"> <span className="font-bold text-md md:text-2xl">${(product.price * product.discount) / 100}</span><span className="line-through text-xs text-red-700">${product?.price}</span></div>) : (<span>${product?.price}</span>)}
                        </div>
                        {/* Colors */}
                        {product?.colors && (
                            <div className="my-4">
                                <span>Colors:</span>
                                <ul className="flex items-center gap-3">
                                    {product?.colors.map((cstColor, i) => <li className="w-7 h-7 rounded-full" style={{ backgroundColor: cstColor }} key={i}></li>)}
                                </ul>
                            </div>
                        )}
                        {/* Sizes */}
                        {product?.sizes && (
                            <div className="my-4">
                                <span>Sizes:</span>
                                <ul className="flex items-center gap-3 mt-3">
                                    {product?.sizes.map((size, i) => <li className="uppercase bg-dark text-white p-1 rounded-md text-xs" key={i}>{size}</li>)}
                                </ul>
                            </div>
                        )}

                        <div className="my-4">
                            <Rating rate={product?.rating || 0} />
                        </div>
                        <div className="mb-4">
                            <span>Tags:</span>
                            <ul className="flex items-center gap-3">
                                {product?.tags && <li className="text-xs capitalize">{product?.tags.join(" - ")}</li>}
                            </ul>
                        </div>
                        {/* Form */}
                        <ProductForm product={product!} />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfo