import { Link } from "react-router-dom"
import { useGetCategoriesQuery } from "@/lib/react-query/CategoriesQuery"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { ICategory } from "@/constant/Interfaces"
import { Spinner } from "@/components"

const Categories = () => {

    const { data: categories, isPending } = useGetCategoriesQuery();
    // if (isPending) return <Spinner />
    return (
        <section className="py-4 relative">
            <div className="container">
                {isPending ? <Spinner /> : (
                    <>
                        <h2 className="relative text-center font-bold text-2xl line mb-20">Our Categories</h2>
                        <Carousel
                            opts={{
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                    stopOnFocusIn: false,
                                    stopOnInteraction: false,
                                })
                            ]}
                        >
                            <CarouselContent>
                                {categories && categories?.map((category: ICategory) => {
                                    return (
                                        <CarouselItem key={category.id} className="basis-1/3 md:basis-1/4">
                                            <Link to={`/categories/products/${category.prefix}`} className="flex flex-col items-center">
                                                <img src={category.image} alt={category.name} width={150} className=" rounded-full" loading="lazy" />
                                                <h2 className="text-center mt-4 text-xs md:text-md font-bold">{category.name}</h2>
                                            </Link>
                                        </CarouselItem>
                                    )
                                })}

                            </CarouselContent>
                        </Carousel>
                    </>
                )}


            </div>
        </section>
    )
}

export default Categories