import supabase from "./Config";
import { IUser } from "@/constant/Interfaces";

export const createUserAPI = async (user: IUser) => {
    try {
        const { data, error } = await supabase.from("users").insert({
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            address: user.address,
            accountID: (await supabase.auth.getUser()).data.user?.id
        })
        if (error) throw error;

        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}

export const getUserAPI = async () => {
    try {
        const { data: { user } } = await supabase.auth.getUser()
        return user;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}

export const getCurrentUserAPI = async ():Promise<IUser> => {
    const userID = (await supabase.auth.getUser()).data.user?.id
    try {
        const { data: user, error } = await supabase
            .from('users')
            .select("*")
            .eq("accountID", userID);

        if (error) throw new Error(error.message);

        return user[0]
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred')
    }
}