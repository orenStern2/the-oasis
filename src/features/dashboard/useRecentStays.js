import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays(){
    const [searchParams ] = useSearchParams();
    
    const numDays = !searchParams.get('last')? 7 : Number(searchParams.get('last'));
    const queryDate = subDays(new Date(), numDays).toISOString();

    const {isLoading, data: stays } = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ['stays', `numDays=${numDays}`],
        refetchOnWindowFocus: false,
    })

    const confirmedStays = stays?.filter(stay => stay.status === 'chekced-in' || stay.status === 'checked-out');

    return {isLoading, stays, confirmedStays,numDays}
}


