import { useQueryClient } from "@tanstack/react-query";
import { useClearCartMutation, useDeleteCartItemMutation, useFetchCartItemsQuery } from "@/lib/react-query/CartQuery";
import { Spinner, EmptySection, CartTable } from "@/components";
import { toast } from "sonner";
import { ICartItems } from "@/constant/Interfaces";

const CartDetails = () => {

    const { data: cartItems, isPending, error } = useFetchCartItemsQuery();
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

    const handleClearCart = (): void => {
        clearCart(undefined, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] });
            }
        })
    }

    if ((cartItems as unknown as ICartItems[])?.length === 0) return <EmptySection cart={true} />

    return (
        <section className="py-4 min-h-96 relative">
            <div className="container">
                {isPending ? <Spinner /> : (
                    <>
                        <h1 className="text-2xl font-bold text-gray">Cart Items</h1>
                        {cartItems && (<CartTable cartItems={cartItems as unknown as ICartItems[]} handleDeleteItem={handleDeleteItem} deleteItemPending={deleteItemPending} clearCart={handleClearCart} clearCartPending={clearCartPending} />)}
                    </>
                )}
            </div>
        </section>
    )
}

export default CartDetails