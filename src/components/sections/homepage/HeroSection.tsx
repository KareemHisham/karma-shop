import {
    Carousel,
    CarouselContent,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { SliderContent } from "@/components"
import { SLIDERCONTENT } from "@/constant"

const HeroSection = () => {
    const sliderOpt = {
        loop: true,
    }
    return (
        <header className="bg-[url(/public/assets/collection/banner-bg.jpg)] h-screen bg-cover bg-center overflow-y-hidden">
            <div className="container">
                <Carousel
                    className="h-screen flex items-center justify-center"
                    opts={sliderOpt}
                    plugins={[
                        Autoplay({
                            delay: 3000
                        })
                    ]}
                >
                    <CarouselContent>
                        {SLIDERCONTENT.map(slide => <SliderContent key={slide.id} slide={slide} />)}
                    </CarouselContent>
                </Carousel>
            </div>
        </header>
    )
}

export default HeroSection