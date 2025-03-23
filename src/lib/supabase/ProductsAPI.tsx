import supabase from "@/lib/supabase/Config"

export const fecthProducts = async (category: string, selectedProduct?: string) => {
    try {
        let query = supabase
            .from('products')
            .select('*');

        if (selectedProduct) {
            query = query.eq("sub_product", selectedProduct);
        }

        const { data: products, error } = await query.eq("cat_prefix", category);

        if (error) throw error

        return products
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "Error fetching products"
        )
    }
}