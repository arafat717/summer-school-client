/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleInstructor = (user) =>{
        fetch(`http://localhost:5000/users/insructor/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is  now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    


    return (
        <div className="w-full p-3 ">
            <p className="text-2xl uppercase mb-2 ms-2"> tottal users: {users.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleAdmin(user)} className="btn btn-ghost btn-lg bg-green-950"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{
                                    user.role === 'insructor' ? 'insructor' :
                                        <button onClick={() => handleInstructor(user)} className="btn btn-ghost btn-lg bg-green-950">instructor</button>
                                }</td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;