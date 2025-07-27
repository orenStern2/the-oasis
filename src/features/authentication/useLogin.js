import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {

    console.log('useLogin hook called');
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({ email, password }) => loginApi({email, password}),
        onSuccess: (user) => {
            console.log('SUCCESS', user);
            queryClient.setQueryData(["user"], user.user);
            navigate('/dashboard', {replace: true})}, 
        onError: (err) => { console.log('ERROR', err)
            toast.error(
                err.message || "Something went wrong. Please try again."
            );
        }
    },
    
);

    return {login, isLoading}
}