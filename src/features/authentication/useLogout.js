import { QueryClient, useMutation } from '@tanstack/react-query';
import { logout as apiLogout } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = new QueryClient();
    const {mutate: logout, isLoading} = useMutation({
    mutationFn: apiLogout,
    onSuccess:() => {
        navigate("/login", {replaxe: true})
        // remopve user from query cache
        queryClient.removeQueries({queryKey: ["user"]});

    },
    })
    return {logout, isLoading}
}