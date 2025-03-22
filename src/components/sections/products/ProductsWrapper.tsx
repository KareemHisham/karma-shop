import { SideFilterCategories, ProductsContainer } from "@/components"

const ProductsWrapper = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="flex items-start gap-4">
                    <SideFilterCategories />
                    <ProductsContainer />
                </div>
            </div>
        </section>
    )
}

export default ProductsWrapper