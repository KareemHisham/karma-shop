import { Link } from "react-router-dom"
import { useGetCategoriesQuery } from "@/lib/react-query/CategoriesQuery"
import { CustomBreadcrumb, Heading, Spinner } from "@/components"
import { ICategory } from "@/constant/Interfaces";
import {imgs} from "@/constant/index"
import { toast } from "sonner";
import useTitleHook from "@/hooks/TitleHook";
import AbortRequests from "@/hooks/AbortRequests";
const CategoriesPage = () => {
    useTitleHook("Categories");
    const { data: categories, isPending, error } = useGetCategoriesQuery();
    if (error) toast.error(error.message)

    //  Cancel Request after component unmounts       
    AbortRequests("fetchCategories")

    return (
        <>
            <Heading>
                <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" }, { title: "Categories", path: "" }]} />
            </Heading>

            <section className="py-4 min-h-96 relative">
                <div className="container">
                    {error && <img src={imgs.wrongImg} alt="wrong" loading="lazy" width={700} className="block mx-auto" />}
                    {isPending ? <Spinner /> : (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                            {categories && categories?.map((category: ICategory) => {
                                return (
                                    <div key={category.id}>
                                        <Link to={`/categories/products/${category.prefix}`} className="flex flex-col items-center justify-center gap-2">
                                            <img src={category.image} alt={category.name} className="w-[100px] object-cover rounded-md" />
                                            <h3 className="capitalize text-center">{category.name}</h3>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>

                    )}

                </div>
            </section>

        </>
    )
}

export default CategoriesPage