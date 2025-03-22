import { useState } from "react";
import { imgs, CATEGORIES } from "@/constant/index"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPlus, FaMinus } from "react-icons/fa6";
const ProductInfo = () => {
    const [quantity] = useState(1)

    const handleImgChange = (img: string) => {
        document.getElementById("main_img")?.setAttribute("src", img)
    }

    return (
        <section className="py-4">
            <div className="container">
                <div className="grid grdi-cols-1 md:grid-cols-2">
                    {/* Product Images */}
                    <div className="flex flex-col items-start gap-3">
                        <img src={imgs.cloth3} alt="" loading="lazy" width={300} className="rounded-lg" id="main_img" />
                        <div className="flex items-center gap-3">
                            {CATEGORIES.map(category => <img src={category.image} alt="" key={category.id} width={50} className="cursor-pointer" onClick={() => handleImgChange(category.image)} />)}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="font-bold text-xl">Product Name</h1>
                        <p className="my-4">Product Description</p>
                        <div>
                            Price: $99
                        </div>
                        <div className="my-4">
                            <span>Colors:</span>
                            <ul className="flex items-center gap-3">
                                <li className="w-7 h-7 rounded-full bg-amber-500"></li>
                                <li className="w-7 h-7 rounded-full bg-amber-500"></li>
                                <li className="w-7 h-7 rounded-full bg-amber-500"></li>
                            </ul>
                        </div>
                        <div className="my-4">
                            <span>Sizes:</span>
                            <ul className="flex items-center gap-3">
                                <li className="uppercase bg-dark text-white p-1 rounded-md">lg</li>
                                <li className="uppercase bg-dark text-white p-1 rounded-md">md</li>
                                <li className="uppercase bg-dark text-white p-1 rounded-md">sm</li>
                            </ul>
                        </div>

                        <form className="flex items-center gap-4">
                            <div className="flex gap-4">
                                <Button type="button"><FaMinus /></Button>
                                <Input type="text" readOnly disabled value={quantity} className="w-12 flex items-center justify-center" />
                                <Button type="button"><FaPlus /></Button>
                            </div>
                            <Button type="submit">Add to cart</Button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfo