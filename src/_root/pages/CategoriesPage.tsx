import { Link } from "react-router-dom"
import { useGetCategoriesQuery } from "@/lib/react-query/CategoriesQuery"
import { CustomBreadcrumb, Heading, Spinner } from "@/components"
import { ICategory } from "@/constant/Interfaces";
import { toast } from "sonner";
const CategoriesPage = () => {
    const { data: categories, isPending, error } = useGetCategoriesQuery();
    if (error) toast.error(error.message)
    
    return (
        <>
            <Heading>
                <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" }, { title: "Categories", path: "" }]} />
            </Heading>
            {isPending ? <Spinner /> : (
                <section className="py-4">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {categories && categories?.map((category: ICategory) => {
                                return (
                                    <div key={category.id}>
                                        <Link to={`/categories/products/${category.prefix}`} className="flex flex-col items-center justify-center gap-2">
                                            <img src={category.image} alt={category.name} className="w-[100px] object-cover rounded-md" />
                                            <h3 className="capitalize">{category.name}</h3>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
            )}

        </>
    )
}

export default CategoriesPage