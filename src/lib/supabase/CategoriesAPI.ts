import supabase from "./Config";
import { ICategory } from "@/constant/Interfaces";

export const fetchCategories = async (): Promise<ICategory[]> => {
    try {

        const { data: categories, error } = await supabase
            .from('categories')
            .select('*')

        if (error) throw new Error;
        console.log(categories)
        return categories;
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "Error fetching categories"
        );
    }
}