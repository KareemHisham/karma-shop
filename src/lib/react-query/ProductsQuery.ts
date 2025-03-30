import { fecthProducts, fetchProductById, updateProductQuantity, } from "@/lib/supabase/ProductsAPI"
import { useMutation, useQuery } from "@tanstack/react-query"

// Get products by category
export const useProductsQuery = (category: string, selectedProduct?: string, paginate?: { page: number, limit: number }) => {
    return useQuery({
        queryKey: ['products', { category, selectedProduct, paginate }],
        queryFn: () => fecthProducts(category, selectedProduct, paginate),
        staleTime: 1000 * 60 * 5,

    })
}

// Get product by id
export const useProductByIdQuery = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id),
        staleTime: 1000 * 60 * 5,
    });
}

// Update product Quantity
export const useUpdateProductQuantityQuery = () => {
    return useMutation({
        mutationFn: ({ id, stock }: { id: number, stock: number }) => updateProductQuantity(id, stock),
        onError: (error) => {
            throw new Error(error instanceof Error ? error.message : "Error updating product")
        }
    })
}