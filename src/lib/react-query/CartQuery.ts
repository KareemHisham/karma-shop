import { useMutation, useQuery } from "@tanstack/react-query"
import { addTocart, clearCartAPI, deleteCartItemAPI, fetchCartItemsAPI, updateCartQuantityAPI } from "../supabase/CartAPI"

export const useCartMutation = () => {
    return useMutation({
        mutationFn: ({ productID, quantity }: { productID: number, quantity: number }) =>
            addTocart(productID, quantity)
    })
}

export const useUpdateCartQuantityMutation = () => {

    return useMutation({
        mutationFn: ({ productID, quantity }: { productID: number, quantity: number }) =>
            updateCartQuantityAPI(productID, quantity),
        onError: (error) => {
            throw new Error(error instanceof Error ? error.message : "Error updating cart")
        }
    })
}

export const useFetchCartItemsQuery = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: () => fetchCartItemsAPI(),
        staleTime: 1000 * 60 * 5,
    })
}

export const useDeleteCartItemMutation = () => {
    return useMutation({
        mutationFn: (id: number) => deleteCartItemAPI(id)
    })
}

export const useClearCartMutation = () => {
    return useMutation({
        mutationFn: clearCartAPI,
    })
}