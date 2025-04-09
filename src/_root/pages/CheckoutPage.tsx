import { CustomBreadcrumb, Heading, CheckoutForm, Spinner } from "@/components"
import { imgs } from "@/constant";
import { ICartItems } from "@/constant/Interfaces";
import useTitleHook from "@/hooks/TitleHook"
import { useFetchCartItemsQuery } from "@/lib/react-query/CartQuery";
import { toast } from "sonner";

const CheckoutPage = () => {
    useTitleHook("Checkout");

    const { data: cartItems, isPending, error } = useFetchCartItemsQuery();

    if (error) {
        toast.error(error instanceof Error ? error.message : "Error fetching cart items")
    }

    if (error || cartItems?.length === 0) {
        toast.warning("Your cart is Empty");
        return (
            <img src={imgs.emptyCart} alt="wrong" loading="lazy" width={700} className="block mx-auto" />
        )
    }

    return (
        <>
            <Heading>
                <CustomBreadcrumb breadcrumLinks={[{ title: "Home", path: "/" }, { title: "Cart", path: "/cart" }, { title: "Checkout", path: "" }]} />
            </Heading>
            <section className="py-4 min-h-96 relative">
                <div className="container">
                    {isPending ? <Spinner /> : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="border border-gray-400 p-2 rounded-md md:col-span-2">
                                <h2 className="font-bold mb-4">Contact Information</h2>
                                <CheckoutForm cartItems={cartItems} />
                            </div>
                            <div className="border border-gray-400 p-2 rounded-md">
                                <h2 className="font-bold mb-4">Order Summary</h2>
                                <ul className="flex flex-col gap-4">
                                    {cartItems && cartItems.map((item: ICartItems) => <li key={item.products.id} className="flex gap-3">
                                        <span>{item.quantity}x</span>
                                        <span className="truncate">{item.products.title}</span>
                                        <span>${item.products.price * item.quantity}</span>
                                    </li>)}

                                    <li className="flex justify-between">
                                        <span>Delivery</span>
                                        <span>$15</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Tax</span>
                                        <span>$15</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Total</span>
                                        <span>$ {cartItems.reduce((acc, item) => acc + item.products.price * item.quantity, 0) + 30}</span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default CheckoutPage