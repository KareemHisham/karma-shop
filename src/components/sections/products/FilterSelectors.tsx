import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CiFilter } from "react-icons/ci";


const FilterSelectors = () => {
  return (
    <section className="py-4">
      <div className="container">
        <h2 className="font-bold text-xl mb-4 flex items-center gap-1">
          <span><CiFilter /></span>
          <span className="text-dark">Filter</span>
        </h2>
        <div className="flex items-center gap-4">

          <Select>
            <SelectTrigger className="w-[180px] focus-visible:ring-[0px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="low">Lowest</SelectItem>
              <SelectItem value="high">Highest</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]  focus-visible:ring-[0px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="old">Old</SelectItem>
            </SelectContent>
          </Select>

        </div>

      </div>
    </section>
  )
}

export default FilterSelectors