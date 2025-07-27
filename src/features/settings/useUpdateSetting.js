import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingsApi } from "../../services/apiSettings";


export function useUpdateSetting(){
      const queryClient = useQueryClient();
  
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingsApi, 
    onSuccess: () => {
      toast.success("Settings successly edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => {
      toast.error("Cabin could not be created: " + error.message);
    },
  });
  return { isUpdating, updateSetting };
}