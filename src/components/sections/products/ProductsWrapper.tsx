import { SideFilterCategories, Spinner, ProductCard, EmptySection } from "@/components"
import { Button } from "@/components/ui/button"
import { IProduct } from "@/constant/Interfaces"
import { useGetCategoriesQuery } from "@/lib/react-query/CategoriesQuery"
import { useProductsQuery } from "@/lib/react-query/ProductsQuery"
import { useState } from "react"
import { toast } from "sonner"

const ProductsWrapper = ({ prefix }: { prefix: string }) => {
    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 6
    })
    const { data: subListProducts } = useGetCategoriesQuery(prefix!);

    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const { data: products, isPending, error } = useProductsQuery(prefix!, selectedCategory, paginate)

    if (error) toast.error(error.message)

    const handleChangeSelected = (category: string) => {
        setSelectedCategory(category)
        setPaginate({ ...paginate, page: 1 })
    }

    return (
        <section className="py-4">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <SideFilterCategories subListProducts={subListProducts!} handleChangeSelected={handleChangeSelected} selectedCategory={selectedCategory || ""} />

                    {products?.length === 0 && (
                        <EmptySection cart={false} />)}

                    {isPending ? <Spinner /> : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products && products?.map((product: IProduct) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-center gap-4 mt-7">
                    <Button variant="outline" onClick={() => setPaginate({ ...paginate, page: paginate.page - 1 })} disabled={paginate.page == 1}>{paginate.page}</Button>
                    <Button variant="outline" onClick={() => setPaginate({ ...paginate, page: paginate.page + 1 })} disabled={products && products?.length < paginate.limit || isPending}>{paginate.page + 1}</Button>
                </div>
            </div>
        </section >
    )
}

export default ProductsWrapper