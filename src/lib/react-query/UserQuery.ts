import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import { createUserAPI, getUserAPI } from "../supabase/UserAPI"
import { IUser } from "@/constant/Interfaces"

export const useCreateUserMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (user: IUser) => createUserAPI(user),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: (error) => {
            throw new Error(error.message);
        }
    })
}

export const useGetUserQuery = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUserAPI()
    })
}

