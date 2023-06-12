/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";



const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContex)
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        console.log('user updatated')
                        const usersInfo = { name: data.name, img:data.photoURL, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(usersInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    Navigate('/')
                                }
                            })

                    })
            })
            .catach(error => {
                console.log(error)
            })
    };
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content md:w-full flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                        <h1 className="text-center text-3xl">PLEASE RESISTER</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photo url</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })}
                                placeholder="photo url" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo url field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).+$/,
                                    message: 'Password must contain at least one capital letter and one special character',
                                }
                            })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">sign up</button>
                        </div>
                        <p><small>Already have an account? <Link className="text-yellow-400" to='/login'>Login</Link></small></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;