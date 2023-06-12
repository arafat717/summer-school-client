/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllClassesCart = ({ classes }) => {
    const { user } = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const { sport, photo, instructor, seats_available, price, _id } = classes;
    const [seats, setSeats] = useState(0)
    const handleclick = (item) => {
        console.log(item)
        if (user && user.email) {
            const bokking = { BookingId: _id, photo, price, sport, email: user.email }
            // console.log(bokking)
            fetch('http://localhost:5000/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
               body: JSON.stringify(bokking)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            navigate('/login');
        }
        
    }
  
    useEffect(() => {
        setSeats(seats_available)
    }, [])
    return (
        <div
            style={{ backgroundColor: seats === 0 ? 'red' : 'initial' }}
            className="card w-96 bg-base-100 shadow-xl"
        >
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-yellow-600">Sports Name: {sport}</h2>
                <h2 className="card-title text-yellow-600">Instructor Name: {instructor}</h2>
                <p className="text-yellow-600">Available seats: {seats_available}</p>
                <p className="text-yellow-600">Price: {price}</p>
                <button onClick={handleclick} disabled={seats === 0} className="btn btn-active btn-primary">Select</button>
            </div>
        </div>
    );
};

export default AllClassesCart;