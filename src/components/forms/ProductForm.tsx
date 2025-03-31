import { useParams } from "react-router-dom";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Loader } from "@/components"

import { cartSchemaValidation } from "@/lib/validation/index"
import { useCartMutation, useFetchCartItemsQuery, useUpdateCartQuantityMutation } from "@/lib/react-query/CartQuery"
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "sonner";
import { ICartItems, IProduct } from "@/constant/Interfaces";
import { useQueryClient } from "@tanstack/react-query";
import { handleQuantity } from "@/helpers";
const ProductForm = ({ product }: { product: IProduct }) => {

    const { id } = useParams();
    const { mutate: addToCart, isPending, error } = useCartMutation();
    const { mutate: updateCartQuantity } = useUpdateCartQuantityMutation();
    const { data: cartItems } = useFetchCartItemsQuery();

    const queryClient = useQueryClient()

    // 1. Define your form.
    const form = useForm<z.infer<typeof cartSchemaValidation>>({
        resolver: zodResolver(cartSchemaValidation),
        defaultValues: {
            quantity: Number(1),
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof cartSchemaValidation>) {
        if (error) toast.error(error.message)

        // check the product stock
        if (product.stock! < values.quantity) {
            toast.error("Product stock is not enough");
            return;
        }

        // check if the product is in the cart
        const isProductInCart = (cartItems as ICartItems[]).find(item => item.productID === +id!);

        if (isProductInCart) {
            // update the cart quantity
            updateCartQuantity({ productID: isProductInCart.productID, quantity: values.quantity }, {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['cart'] })
                    toast.success("Quantity updated to cart");
                    form.reset();
                }
            })
        } else {
            // add to cart
            addToCart({ productID: +id!, quantity: values.quantity }, {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['cart'] })
                    toast.success("Product added to cart");
                    form.reset();
                },
                onError: (error) => {
                    toast.error(error.message)
                }
            })

        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <Button type="button" onClick={() => handleQuantity("decrement", form)} disabled={product.stock! == 0} className={`${product.stock! == 0 ? "bg-red-700 text-white" : "bg-primary text-white"}`}><FaMinus /></Button>
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>

                                <FormControl>
                                    <Input type="text" {...field} readOnly disabled className="w-12 flex items-center justify-center" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="button" onClick={() => handleQuantity("increment", form)} disabled={product.stock! == 0} className={`${product.stock! == 0 ? "bg-red-700 text-white" : "bg-primary text-white"}`}><FaPlus /></Button>
                </div>
                <Button type="submit" disabled={isPending || product.stock! == 0} className={`${isPending ? "cursor-not-allowed" : ""} ${product.stock! == 0 ? "bg-red-700 text-white" : " bg-primary text-white"}`}>{isPending && (<Loader />)} {product.stock! == 0 ? "Out of stock" : "Add to cart"}</Button>
            </form>
        </Form>
    )
}

export default ProductForm