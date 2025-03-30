import { CustomBreadcrumb, Heading, CartDetails } from "@/components"

const CartPage = () => {
  return (
    <>
      <Heading>
        <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" }, { title: "Cart", path: "" }]} />
      </Heading>
      <CartDetails />
    </>
  )
}

export default CartPage