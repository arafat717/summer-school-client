import { useQuery } from "@tanstack/react-query";
import { AuthContex } from "../Providers/AuthProviders";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useBooking = () => {
    const { user,loading, } = useContext(AuthContex)
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            return res.data;
           
        },
    })
    return [selected, refetch]
};

export default useBooking;