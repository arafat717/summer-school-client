import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const {singin} = useContext(AuthContex);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        singin(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
               
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:w-2/3 flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-2xl text-white">LOGIN</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/*  */}
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="LOGIN" />

                        </div>
                        <p><small>new here? <Link className="text-yellow-400" to='/registration'>signUp</Link></small></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;