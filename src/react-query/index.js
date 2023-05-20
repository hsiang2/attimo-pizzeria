import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductById, getProducts, getProductsByCategory, getUserInfo, login, logout, register, updateUserInfo } from "../api"

export const useProducts = () => {
    const { data, isLoading } = useQuery([], getProducts)
    return { data, isLoading }
}

export const useProductsByCategory = (category) => {
    const { data, isLoading } = useQuery([category], getProductsByCategory)
    return { data, isLoading }
}

export const useProductById = (productId) => {
    // const { data, isLoading } = useQuery([productId], getProductById)
    // return { data, isLoading }
    return useQuery([productId], getProductById)
}

export const useUserInfo = () => {
    return useQuery({
        queryKey: ["uid"],
        queryFn: getUserInfo,
        initialData: {}
    })
}

export const useSignInWithEmailPassword = () => {
    const queryClient = useQueryClient()
    return useMutation(login, {
        onSuccess: () => {
            queryClient.invalidateQueries(["uid"])
        }
    })
}

export const useRegisterWithEmailPassword = () => {
    const queryClient = useQueryClient()
    return useMutation(register, {
        onSuccess: () => {
            queryClient.invalidateQueries(["uid"])
        }
    })
}

export const useUpdateProfile = () => {
    const queryClient = useQueryClient()
    return useMutation(updateUserInfo, {
        onSuccess: () => {
            queryClient.invalidateQueries(["uid"])
        }
    })
}

export const useLogout = () => {
    const queryClient = useQueryClient()
    return useMutation(logout, {
        onSuccess: () => {
            queryClient.invalidateQueries(["uid"])
        }
    })
}