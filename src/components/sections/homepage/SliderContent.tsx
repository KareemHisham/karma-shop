import { Link } from "react-router-dom"
import {
    CarouselItem,
} from "@/components/ui/carousel"
import { ISliderContent } from "@/constant/Interfaces"
const SliderContent = ({ slide }: { slide: ISliderContent }) => {
    return (
        <CarouselItem className="flex items-center justify-between">
            <div className="flex flex-col justify-center items-center md:items-baseline md:justify-baseline gap-3 basis-xl text-center md:text-start">
                <h2 className="capitalize text-[25px] md:text-2xl xl:text-[60px] text-dark font-bold">{slide.title}</h2>
                <p className="text-gray text-sm leading-6">{slide.description}</p>
                <Link to="/products" className="bg_gradient text-white text-sm">Shop Now</Link>
            </div>
            <img src={slide.img} alt="kamara product" className="hidden md:block object-cover md:max-w-[45%] xl:max-w-[100%] " draggable={false} />
        </CarouselItem>
    )
}

export default SliderContent