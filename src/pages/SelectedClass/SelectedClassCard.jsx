/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import useBooking from "../../Hooks/useBooking";


const SelectedClassCard = () => {

    const [selected, refetch] = useBooking()


    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-school-server-wheat.vercel.app/selected/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                ' deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <div className=" p-3 -mt-80">
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>image</th>
                                <th>name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selected.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            {/*  */}
                                        </div>
                                    </td>
                                    <td>
                                        {item.sport}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-error">delete</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-error">pay</button>
                                    </th>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClassCard;