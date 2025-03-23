import { SideFilterCategories, Spinner, ProductCard } from "@/components"
import { IProduct } from "@/constant/Interfaces"
import { useGetCategoriesQuery } from "@/lib/react-query/CategoriesQuery"
import { useProductsQuery } from "@/lib/react-query/ProductsQuery"
import { useState } from "react"
import { toast } from "sonner"

const ProductsWrapper = ({ prefix }: { prefix: string }) => {
    const { data: subListProducts } = useGetCategoriesQuery(prefix!);

    const [selectedCategory, setSelectedCategory] = useState<string | undefined>('')
    const { data: products, isPending, error } = useProductsQuery(prefix!, selectedCategory)

    if (error) toast.error(error.message)

    const handleChangeSelected = (category: string) => setSelectedCategory(category)

    return (
        <section className="py-4">
            <div className="container">
                <div className="flex items-start gap-4">
                    <SideFilterCategories subListProducts={subListProducts!} handleChangeSelected={handleChangeSelected} />

                    {products?.length === 0 && (
                        <div className="bg-red-500 text-white p-2 rounded-md text-center w-full">No Items found</div>)}

                    {isPending ? <Spinner /> : (
                        <div className="grid grid-cols-3 gap-4">
                            {products && products?.map((product: IProduct) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}

export default ProductsWrapper