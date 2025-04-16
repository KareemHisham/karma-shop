import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { BiCategory } from "react-icons/bi";
import { SideFilterCategoriesProps } from "@/constant/Interfaces";

const SideFilterCategories = memo(({ 
  subListProducts, 
  handleChangeSelected, 
  selectedCategory 
}: SideFilterCategoriesProps) => {
  
  const handleCategoryClick = useCallback((category: string) => {
    handleChangeSelected(category);
  }, [handleChangeSelected]);

  const getButtonClassName = useCallback((category: string) => {
    return `capitalize bg-transparent cursor-pointer transition-all duration-300 w-full ${
      selectedCategory === category ? "bg-primary" : ""
    }`;
  }, [selectedCategory]);

  // Flatten the sub-products array for simpler rendering
  const categories = subListProducts?.flatMap(product => 
    product?.sub_product || []
  ) || [];


  return (
    <section className="border-1 p-3 rounded-lg sticky top-30 border-stone-400 z-11 bg-white md:bg-transparent">
      <h2 className="font-bold text-xl mb-4 flex items-center gap-1">
        <span><BiCategory /></span>
        <span>Categories</span>
      </h2>

      <ul className="flex flex-row md:flex-col gap-2 justify-center overflow-auto md:overflow-visible">
        <li>
          <Button 
            className={getButtonClassName("")} 
            onClick={() => handleCategoryClick("")}
          >
            all
          </Button>
        </li>
        {categories.map((item) => (
          <li key={item}>
            <Button 
              className={getButtonClassName(item)} 
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default SideFilterCategories;


