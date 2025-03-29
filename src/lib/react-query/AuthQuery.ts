import { useMutation, useQueryClient } from "@tanstack/react-query"
import { signinAPI, signoutAPI, signupAPI } from "@/lib/supabase/AuthAPI"

export const useSignupMutation = () => {
    return useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => signupAPI(email, password)
    })
}

export const useSigninMutation = () => {
    return useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => signinAPI(email, password)
    })
}

export const useSignoutMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => signoutAPI(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: (error) => {
            throw new Error(error.message);
        }
    })
}
