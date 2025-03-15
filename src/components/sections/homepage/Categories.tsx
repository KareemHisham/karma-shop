import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { CATEGORIES } from "@/constant"
import { Link } from "react-router-dom"

const Categories = () => {
    const sliderOpt = {
        loop: true,
    }
    return (
        <section className="py-4">
            <div className="container">
                <h2 className="relative text-center font-bold text-2xl line mb-20">Our Categories</h2>
                <Carousel
                    opts={sliderOpt}
                    plugins={[
                        Autoplay({
                            delay: 3000
                        })
                    ]}
                >
                    <CarouselContent>
                        {CATEGORIES.map(category => {
                            return (
                                <CarouselItem key={category.id} className="basis-1/4">
                                    <Link to="" className="flex flex-col items-center">
                                        <img src={category.image} alt={category.title} width={150} className=" rounded-full" />
                                        <h2 className="text-center mt-4 text-md font-bold">{category.title}</h2>
                                    </Link>
                                </CarouselItem>
                            )
                        })}

                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    )
}

export default Categories