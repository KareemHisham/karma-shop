import { useNavigate, useParams } from "react-router-dom"
import { useGetCategoriesQuery } from "@/lib/react-query/CategoriesQuery"
import { Heading, ProductsWrapper } from "@/components"
import { CustomBreadcrumb } from "@/components/index"
import useTitleHook from "@/hooks/TitleHook"
const ProductsPage = () => {
  useTitleHook("Products");
  const { prefix } = useParams();
  const navigate = useNavigate()
  const { data: categories } = useGetCategoriesQuery(prefix!)

  // Check if the prefix is exist in database or not
  const filteredCategory = categories?.find(category => category.prefix == prefix)
  if (!filteredCategory) {
    navigate("/404")
  }

  return (
    <>
      <Heading>
        <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" },{title:"Categories",path:"/categories"}, { title: `${prefix?.toUpperCase()} PRODUCTS`, path: "" }]} />
      </Heading>
      {/* <FilterSelectors /> */}
      <ProductsWrapper prefix={prefix!} />
    </>
  )
}

export default ProductsPage