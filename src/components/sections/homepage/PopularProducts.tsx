import { Link } from "react-router-dom"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from 'embla-carousel-auto-scroll'

import { imgs } from "@/constant/index"

const PopularProducts = () => {
  return (
    <section className="py-4">
      <div className="container">
        <h2 className="relative text-center font-bold text-2xl line mb-20">Popular Items</h2>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({ playOnInit: true, stopOnInteraction: false,speed:.5 })
          ]}
        >
          <CarouselContent>

            <CarouselItem className=" basis-1/4">
              <Link to="/products">
                <img src={imgs.watch1} alt="Karma Products" width={300} />
              </Link>
            </CarouselItem>

            <CarouselItem className=" basis-1/4">
              <Link to="/products">
                <img src={imgs.shoe2} alt="Karma Products" width={300} />
              </Link>
            </CarouselItem>

            <CarouselItem className=" basis-1/4">
              <Link to="/products">
                <img src={imgs.cloth1} alt="Karma Products" width={300} />
              </Link>
            </CarouselItem>

            <CarouselItem className=" basis-1/4">
              <Link to="/products">
                <img src={imgs.cloth3} alt="Karma Products" width={300} />
              </Link>
            </CarouselItem>

            <CarouselItem className=" basis-1/4">
              <Link to="/products">
                <img src={imgs.cloth1} alt="Karma Products" width={300} />
              </Link>
            </CarouselItem>

          </CarouselContent>
        </Carousel>

      </div>
    </section>
  )
}

export default PopularProducts