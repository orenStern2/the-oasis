import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";


export function useCheckout() {
    const queryClient = useQueryClient();
    

  const {mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId)=>updateBooking(bookingId,{
        status: "checked-out",
        
    }),
    // data is returning from the updateBooking function
    onSuccess: (data) => {
        toast.success(`Booking #${data.id} has been checked out successfully!`);
        queryClient.invalidateQueries({active: true})
    
    },
    onError: (error) => {
        toast.error(`Error checking out booking: ${error.message}`);
    },
  })
  return { checkout, isCheckingOut };
}