import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser(){
      const queryClient = useQueryClient();
  
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account successfully updated");

      // manually update data in the cache
    //   queryClient.setQueryData("user", user)

      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      toast.error("Cabin could not be created: " + error.message);
    },
  });
  return { updateUser, isUpdating };
}