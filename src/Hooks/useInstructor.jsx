import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
    const { user , loading} = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: isinsructor, refetch, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isinsructor', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/insructor/${user?.email}`);
            console.log('is insructor response', res)
            return res.data.insructor;
        }
    })
    return [isinsructor, refetch, isAdminLoading]
};

export default useInstructor;