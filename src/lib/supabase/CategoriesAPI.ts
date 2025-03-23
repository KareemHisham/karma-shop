import supabase from "./Config";
import { ICategory } from "@/constant/Interfaces";

export const fetchCategories = async (prefix?: string): Promise<ICategory[]> => {
    try {
        let query = supabase.from('categories').select('*');

        if (prefix) {
            query = query.eq('prefix', prefix);
        }

        const { data: categories, error } = await query;

        if (error) throw new Error;
        return categories;
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "Error fetching categories"
        );
    }
}
