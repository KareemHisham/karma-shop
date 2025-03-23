import { useQuery } from '@tanstack/react-query'
import { fetchCategories } from '@/lib/supabase/CategoriesAPI'


export const useGetCategoriesQuery = (prefix?: string) => {
    return useQuery({
        queryKey: ['fetchCategories', prefix],
        queryFn: () => fetchCategories(prefix),
        staleTime: 1000 * 60 * 5,
    })
}

