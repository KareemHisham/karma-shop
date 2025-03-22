import { CustomBreadcrumb } from "@/components/index"
const Heading = () => {
    return (
        <section className="bg-[url(/public/assets/collection/banner-bg.jpg)] h-[50vh] bg-cover bg-center overflow-y-hidden flex items-center justify-center">
            <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" }, { title: "Products", path: "Products" }, { title: "product Details", path: "" }]} />
        </section>
    )
}

export default Heading