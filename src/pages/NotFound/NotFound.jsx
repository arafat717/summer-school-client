import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <img className="w-full h-full mt-10" src="https://as2.ftcdn.net/v2/jpg/02/25/41/29/1000_F_225412910_g8UYQfQb4kvFkHPSKnKwOz5YNQOG7j8e.jpg" alt="" />
            <p className="text-xl text-center mt-10">OPSSS !!!!  <Link className="text-warning" to='/'><button className="btn btn-ghost">go to home</button></Link></p>
        </div>
    );
};

export default NotFound;