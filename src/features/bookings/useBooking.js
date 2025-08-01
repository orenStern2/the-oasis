import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const {bookingId} = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // Disable retry on error
  });
  return { isLoading, error, booking };
}