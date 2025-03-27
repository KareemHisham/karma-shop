import { useMutation } from "@tanstack/react-query"
import { addTocart } from "../supabase/CartAPI"

export const useCartMutation = () => {
    return useMutation({
        mutationFn: ({ productID, quantity }: { productID: number, quantity: number }) => 
            addTocart(productID, quantity),
        onSuccess: (data) => {
            console.log("data=>", data)
        }
    })
}