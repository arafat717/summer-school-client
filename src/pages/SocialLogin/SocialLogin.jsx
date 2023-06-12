import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContex } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { goggleSignIn } = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handlegoogleLogin = () => {
        goggleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                const usersInfo = { name: user.displayName, email: user.email }
                fetch('https://summer-camp-school-server-wheat.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(usersInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handlegoogleLogin} className="btn btn-square btn-outline">
                   <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;