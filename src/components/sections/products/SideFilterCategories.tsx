import { Button } from "@/components/ui/button";
import { BiCategory } from "react-icons/bi";
import { ICategory } from "@/constant/Interfaces";
const SideFilterCategories = ({ subListProducts, handleChangeSelected, selectedCategory }: { subListProducts: ICategory[], handleChangeSelected: (selectedCategory: string) => void, selectedCategory: string }) => {

  return (
    <section className="border-1 p-3 rounded-lg sticky top-30 border-stone-400 z-11 bg-white md:bg-transparent">
      <h2 className="font-bold text-xl mb-4 flex items-center gap-1">
        <span><BiCategory /></span>
        <span>Categories</span>
      </h2>

      <ul className="flex flex-row md:flex-col gap-2 justify-center overflow-auto md:overflow-visible">
        < li >
          <Button className={`capitalize bg-transparent cursor-pointer transition-all duration-300 w-full ${selectedCategory === "" ? "bg-primary" : ""}`} onClick={() => handleChangeSelected("")}>all</Button>
        </ li>
        {subListProducts && subListProducts.map(product => {
          return (
            product?.sub_product && product?.sub_product.map((item) => {
              return (
                < li key={item} >
                  <Button className={`capitalize bg-transparent cursor-pointer transition-all duration-300 w-full ${selectedCategory === item ? "bg-primary" : ""}`} onClick={() => handleChangeSelected(item)}>{item}</Button>
                </ li>
              )
            })
          )
        })}
      </ul>
    </section>
  )
}

export default SideFilterCategories


