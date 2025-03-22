import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { imgs } from "@/constant/index"
import { Button } from "../ui/button"

import { CiShoppingCart } from "react-icons/ci";
import { GrView } from "react-icons/gr";

const ProductCard = () => {
  return (
    <Card className="p-4 border-stone-400 shadow-none transition-shadow duration-300 hover:shadow-[1px_1px_10px_1px_rgba(0,0,0,0.25)]">
      <CardHeader>
        <img src={imgs.shirts} alt="" loading="lazy" />
      </CardHeader>
      <CardTitle>
        <p>Product Name</p>
      </CardTitle>
      <CardDescription>
        Product Description
      </CardDescription>
      <CardFooter className="p-0 justify-center gap-4">
        <Button className="bg-transparent cursor-pointer transition-all duration-500 border-1 border-primary"><CiShoppingCart /></Button>
        <Button className="bg-transparent cursor-pointer transition-all duration-500 border-1 border-primary"><GrView /></Button>
      </CardFooter>
    </Card>

  )
}

export default ProductCard