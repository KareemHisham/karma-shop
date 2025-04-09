import { useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { checkoutSchemaValidation } from "@/lib/validation"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ICartItems } from "@/constant/Interfaces"
import { useUpdateProductQuantityQuery } from "@/lib/react-query/ProductsQuery"
import { toast } from "sonner"
import { useClearCartMutation } from "@/lib/react-query/CartQuery"
import { Loader } from "@/components/index"
const CheckoutForm = ({ cartItems }: { cartItems: ICartItems[] }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutateAsync: products } = useUpdateProductQuantityQuery();
    const { mutate: clearCart, isPending: clearCartPending } = useClearCartMutation()
    // console.log()

    // 1. Define your form.
    const form = useForm<z.infer<typeof checkoutSchemaValidation>>({
        resolver: zodResolver(checkoutSchemaValidation),
        defaultValues: {
            fullname: "",
            email: "",
            address: "",
            city: "",
            mark: "",
            phone: Number(),
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof checkoutSchemaValidation>) {
        console.log(values)
        cartItems.forEach((item: ICartItems) => {
            if (item.products.stock) {
                products({ id: item.products.id, stock: (item.products.stock) - item.quantity }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries({ queryKey: ['cart'] })
                        toast.success("Your request is on progress");
                        form.reset();
                        clearCart();
                        navigate("/")
                    }
                })
            }

        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Fullname */}
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label_control text-dark">Fullname</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} className="form_control border-dark text-dark" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label_control text-dark">Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} className="form_control border-dark text-dark" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* address */}
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label_control text-dark">Address</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} className="form_control border-dark text-dark" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* city */}
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label_control text-dark">City</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} className="form_control border-dark text-dark" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* mark */}
                <FormField
                    control={form.control}
                    name="mark"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label_control text-dark">Mark</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} className="form_control border-dark text-dark" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* phone */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label_control text-dark">Phone Number</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} className="form_control border-dark text-dark" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={clearCartPending}>
                    {clearCartPending && <Loader />}
                    Submit</Button>
            </form>
        </Form>
    )
}

export default CheckoutForm