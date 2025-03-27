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

import { cartSchemaValidation } from "@/lib/validation/index"
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useCartMutation } from "@/lib/react-query/CartQuery"
import { useParams } from "react-router-dom";
const CartFrom = () => {

    const { mutate: addToCart, isPending } = useCartMutation();
    const { id } = useParams();
    // 1. Define your form.
    const form = useForm<z.infer<typeof cartSchemaValidation>>({
        resolver: zodResolver(cartSchemaValidation),
        defaultValues: {
            quantity: Number(),
        },
    });


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof cartSchemaValidation>) {
        try {
            await addToCart({ productID: +id!, quantity: values.quantity })
        } catch (error) {
            console.log(error)
        }

        console.log(values)
    }

    const handleQuantity = (type: "increment" | "decrement") => {
        if (type === "increment") {
            form.setValue("quantity", form.getValues("quantity") + 1)
        } else {
            form.setValue("quantity", form.getValues("quantity") - 1)
            if (form.getValues("quantity") < 1) {
                form.setValue("quantity", 1)
            }
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <Button type="button" onClick={() => handleQuantity("decrement")}><FaMinus /></Button>
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
                    <Button type="button" onClick={() => handleQuantity("increment")}><FaPlus /></Button>
                </div>
                <Button type="submit">Add to cart</Button>
            </form>
        </Form>
    )
}

export default CartFrom