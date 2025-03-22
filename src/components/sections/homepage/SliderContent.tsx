import { Link } from "react-router-dom"
import {
    CarouselItem,
} from "@/components/ui/carousel"
import { ISliderContent } from "@/constant/Interfaces"
const SliderContent = ({ slide }: { slide: ISliderContent }) => {
    return (
        <CarouselItem className="flex items-center justify-between">
            <div className="flex flex-col gap-3 basis-xl">
                <h2 className="text-[35px] capitalize md:text-[60px] text-dark font-bold">{slide.title}</h2>
                <p className="text-gray text-sm leading-6">{slide.description}</p>
                <Link to="/products" className="bg_gradient text-white text-sm">Shop Now</Link>
            </div>
            <img src={slide.img} alt="kamara product" className=" object-cover" draggable={false} />
        </CarouselItem>
    )
}

export default SliderContent