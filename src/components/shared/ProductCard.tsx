import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IProduct } from "@/constant/Interfaces"

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card className="p-4 border-stone-400 shadow-none transition-shadow duration-300 hover:shadow-[1px_1px_10px_1px_rgba(0,0,0,0.25)] relative">

      {product.discount && <Badge variant="destructive" className="absolute left-2 top-2">Sale {product.discount}%</Badge>}
      {product.isNew &&  <Badge variant="default" className="absolute right-2 top-2">New Item</Badge>}

      <Link to={`/products/${product.id}`} className="flex flex-col gap-4">
        <CardHeader>
          <img src={product.images[0]} alt={product.title} loading="lazy" width={200} />
        </CardHeader>
        <CardTitle className="truncate">
          {product.title}
        </CardTitle>
        <CardDescription className="truncate">
          {product.description}
        </CardDescription>
      </Link>
      <CardFooter className="flex items-center justify-between">

        {product.discount ? (
          <div>
            <span className="text-xl font-bold">${(product.price * product.discount) / 100} </span>
            <span className="text-sm line-through text-red-600">${product.price}</span>
          </div>
        ) : (
          <span className="text-xl font-bold">${product.price}</span>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProductCard


