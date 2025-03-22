import { Button } from "@/components/ui/button";
import { BiCategory } from "react-icons/bi";
const SideFilterCategories = () => {
  return (
    <section className="border-1 p-3 rounded-lg sticky top-30 border-stone-400">
      <h2 className="font-bold text-xl mb-4 flex items-center gap-1">
        <span><BiCategory /></span>
        <span className="text-gray">Categories</span>
      </h2>

      <ul className="flex flex-col gap-2">
        <li>
          <Button className="bg-transparent cursor-pointer transition-all duration-300">Men</Button>
        </li>
        <li>
          <Button className="bg-transparent cursor-pointer transition-all duration-300">Women</Button>
        </li>
        <li>
          <Button className="bg-transparent cursor-pointer transition-all duration-300">Kids</Button>
        </li>
      </ul>
    </section>
  )
}

export default SideFilterCategories