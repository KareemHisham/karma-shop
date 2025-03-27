import supabase from "./Config"

export const addTocart = async (productID: number, quantity: number) => {
    try {

        const { data: cartItems, error } = await supabase
            .from('cart')
            .insert([
                { productID: productID, quantity: quantity },
            ])
            .select();

        if (error) throw error;

        console.log("cartItems=>", cartItems)
        return cartItems;

    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "Error adding to cart"
        )
    }
}