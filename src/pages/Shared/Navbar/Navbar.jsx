import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContex)
    const handleLogOut = () => {
        logOut()
            .then()
    }
    const allLinks = <>
        <Link className='m-2'>Home</Link>
        <Link to='/instructors' className='m-2'>Instructors</Link>
        <Link to='/allclasses' className='m-2'>Classes</Link>
        {
            user && <Link to='/dasboard' className='m-2'>Dashboard</Link>
        }
    </>
    return (
        <div className="navbar bg-slate-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {allLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-16 rounded-full' src="https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {allLinks}
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <img className={`w-14 rounded-full mr-2`} src={user.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn btn-primary">logOut</button>
                    </> :
                        <>
                            <Link to='/login' className="btn">Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;