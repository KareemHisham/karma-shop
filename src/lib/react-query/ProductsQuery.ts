import { fecthProducts, fetchProductById, } from "@/lib/supabase/ProductsAPI"
import { useQuery } from "@tanstack/react-query"

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