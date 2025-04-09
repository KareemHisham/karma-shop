import { IProduct } from "@/constant/Interfaces";
import supabase from "@/lib/supabase/Config"

export const fecthProducts = async (category: string, selectedProduct?: string, paginate?: { page: number, limit: number }) => {
    try {
        let query = supabase
            .from('products')
            .select('*');

        // Add pagination if the parameter is provided
        if (paginate) {
            const { page, limit } = paginate;
            const start = (page - 1) * limit;
            const end = start + limit - 1;
            query = query.range(start, end);
        }

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

export const fetchProductById = async (id: string): Promise<IProduct> => {
    try {

        const { data: product, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id);

        if (error) throw error;
        return product[0]

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error fetching product")
    }
}

export const updateProductQuantity = async (id: number, stock: number): Promise<IProduct> => {
    try {

        const { data, error } = await supabase
            .from('products')
            .update({ stock: stock })
            .eq('id', id)
            .select()

        if (error) throw error;
        return data[0]
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error updating product")
    }
}
