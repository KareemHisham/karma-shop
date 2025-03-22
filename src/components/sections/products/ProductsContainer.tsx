import { ProductCard } from "@/components"
const ProductsContainer = () => {
    return (
        <section>
            <div className="grid grid-cols-5 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default ProductsContainer