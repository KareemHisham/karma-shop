import { Heading, ProductInfo } from "@/components/index"
import { CustomBreadcrumb } from "@/components/index"
const ProductDetails = () => {
    return (
        <>
            <Heading>
                <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" }, { title: "Product Details", path: "" }]} />
            </Heading>
            <ProductInfo />
        </>
    )
}

export default ProductDetails