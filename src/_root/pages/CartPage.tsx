import { CustomBreadcrumb, Heading, CartDetails } from "@/components"
import useTitleHook from "@/hooks/TitleHook";
const CartPage = () => {
  useTitleHook("Cart");
  return (
    <>
      <Heading>
        <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" }, { title: "Categories", path: "/categories" }, { title: "Cart", path: "" }]} />
      </Heading>
      <CartDetails />
    </>
  )
}

export default CartPage