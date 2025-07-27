import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

  const {mutate: checkin, isLoading: isChecklingin } = useMutation({
    mutationFn: ({bookingId, breakfast})=>updateBooking(bookingId,{
        status: "checked-in",
        isPaid: true,
        ...breakfast,
        
    }),
    // data is returning from the updateBooking function
    onSuccess: (data) => {
        toast.success(`Booking #${data.id} has been checked in successfully!`);
        queryClient.invalidateQueries({active: true})
        navigate(`/`);
    },
    onError: (error) => {
        toast.error(`Error checking in booking: ${error.message}`);
    },
  })
  return { checkin, isChecklingin };
}