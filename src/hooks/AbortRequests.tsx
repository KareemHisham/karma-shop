import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"

const AbortRequests = (request: string) => {
    const queryClient = useQueryClient()
    useEffect(() => {
        return () => {
            queryClient.cancelQueries({ queryKey: [request] });
            console.log("request aborted")
        }
    }, [queryClient, request])
}

export default AbortRequests