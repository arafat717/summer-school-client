import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const { user , loading} = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: isusers, refetch, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isusers', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isusers, refetch, isAdminLoading]
};

export default useUsers;