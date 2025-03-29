import supabase from "./Config";

export const signupAPI = async (email: string, password: string) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) throw error;
        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}

export const signinAPI = async (email: string, password: string) => {
    try {
        const { data: user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) throw error;
        return user;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}

export const signoutAPI = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error;
        return true;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}
