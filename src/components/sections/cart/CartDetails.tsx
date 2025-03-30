import { useQueryClient } from "@tanstack/react-query";
import { useClearCartMutation, useDeleteCartItemMutation, useFetchCartItemsQuery } from "@/lib/react-query/CartQuery";
import { Spinner, EmptySection, CartTable } from "@/components";
import { ICartItemsWithProduct } from "@/constant/Interfaces";
import { toast } from "sonner";

const CartDetails = () => {

    const { data: cartItems, isPending, error } = useFetchCartItemsQuery(true);
    const { mutate: deleteItem, isPending: deleteItemPending } = useDeleteCartItemMutation()
    const { mutate: clearCart, isPending: clearCartPending } = useClearCartMutation()
    const queryClient = useQueryClient();

    if (error) {
        toast.error(error.message)
    }

    const handleDeleteItem = (id: number) => {
        deleteItem(id, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] })
                toast.success("Item deleted from cart")
            }
        })
    }

    const handleClearCart = () => {
        clearCart(undefined, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] });
                toast.success("Cart cleared")
            }
        })
    }

    if (isPending) return <Spinner />
    if ((cartItems as unknown as ICartItemsWithProduct[])?.length === 0) return <EmptySection />

    return (
        <section className="py-4">
            <div className="container">

                {cartItems && (<CartTable cartItems={cartItems as unknown as ICartItemsWithProduct[]} handleDeleteItem={handleDeleteItem} deleteItemPending={deleteItemPending} clearCart={handleClearCart} clearCartPending={clearCartPending} />)}
            </div>
        </section>
    )
}

export default CartDetails