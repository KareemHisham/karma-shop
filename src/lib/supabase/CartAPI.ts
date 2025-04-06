import supabase from "./Config"
import { ICartItems } from "@/constant/Interfaces"

export const addTocart = async (productID: number, quantity: number) => {
    try {

        const { data: cartItems, error } = await supabase
            .from('cart')
            .insert([
                { productID, quantity, userID: (await supabase.auth.getUser()).data.user?.id },
            ])
            .select();

        if (error) throw error;

        return cartItems;

    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "Error adding to cart"
        )
    }
}

export const updateCartQuantityAPI = async (productID: number, quantity: number) => {
    try {

        const { data, error } = await supabase
            .from('cart')
            .update({ quantity: quantity })
            .eq('productID', productID)
            .eq("userID", (await supabase.auth.getUser()).data.user?.id)
            .select();

        if (error) throw new Error(error.message)

        return data;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error updating cart")
    }
}

export const fetchCartItemsAPI = async (): Promise<ICartItems[]> => {
    try {
        const { data: cart, error } = await supabase
            .from('cart')
            .select('quantity,productID,products(*)')
            .eq('userID', (await supabase.auth.getUser()).data.user?.id);

        if (error) throw new Error(error.message)
        return cart as unknown as ICartItems[];

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error fetching cart items")
    }
}

export const deleteCartItemAPI = async (id: number) => {
    try {

        const { error } = await supabase
            .from('cart')
            .delete()
            .eq('productID', id)

        if (error) throw new Error(error.message)

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error deleting cart item")
    }
}

export const clearCartAPI = async () => {
    try {

        const { error } = await supabase
            .from('cart')
            .delete()
            .neq('productID', 0);

        if (error) throw new Error(error.message)
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error clearing cart")
    }
}
