import { fecthProducts, } from "@/lib/supabase/ProductsAPI"
import { useQuery } from "@tanstack/react-query"

export const useProductsQuery = (category: string, selectedProduct?: string) => {
    return useQuery({
        queryKey: ['products', [category, selectedProduct]],
        queryFn: () => fecthProducts(category, selectedProduct),
        staleTime: 1000 * 60 * 5,
    })
}