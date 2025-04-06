import { Link } from "react-router-dom"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from 'embla-carousel-auto-scroll'

import { useProductsQuery } from "@/lib/react-query/ProductsQuery"
import { IProduct } from "@/constant/Interfaces"

const PopularProducts = () => {

  const { data: products } = useProductsQuery("fashion");
  return (
    <section className="py-4">
      <div className="container">
        <h2 className="relative text-center font-bold text-2xl line mb-20">Popular Items</h2>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: .5 })
          ]}
        >
          <CarouselContent>
            {products && products?.slice(6).map((product: IProduct) => <CarouselItem key={product.id} className=" basis-1/4">
              <Link to={`/categories/products/${product.cat_prefix}`}>
                <img src={product.images[0]} alt={product.title} width={300} />
              </Link>
            </CarouselItem>)}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  )
}

export default PopularProducts