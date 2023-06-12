// /* eslint-disable no-unused-vars */
import { FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import SectionTittle from "../../SectionTittle/SectionTittle";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";



const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isinsructor] = useInstructor();

    return (
        <>
            <SectionTittle sunheading={"Dashboard"}></SectionTittle>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side mt-40">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    {
                        isAdmin && <ul className="menu p-4 w-80 bg-[#423e37] ">
                            <NavLink to='/dasboard/manageusers' className="m-3">Manage users</NavLink>
                            <NavLink to='/dasboard/manageclasses' className="m-3">Manage classes</NavLink>
                        </ul>

                    }

                    {
                        isinsructor && <ul className="menu p-4 w-80 bg-[#423e37] ">
                            <NavLink to='/dasboard/addclass' className="m-3">Add a Class</NavLink>
                            <NavLink to='/dasboard/myclass' className="m-3">My Classes</NavLink>
                        </ul>
                    }

                    {
                        isAdmin && isinsructor == false && <ul className="menu p-4 w-80 bg-[#423e37] ">
                            <NavLink to='/dasboard/selectedclass' className="m-3">Selected course</NavLink>
                            <NavLink to='/dasboard/enroll' className="m-3">Enrolled class</NavLink>
                        </ul>

                    }

                   




                    <ul className="menu p-4 w-80 bg-[#423e37] ">

                        <div className="divider "></div>
                        <li><NavLink to='/' className="m-3"><FaHome></FaHome>HOME</NavLink></li>
                        <li> <NavLink to='/instructors' className="m-3"><FaWallet></FaWallet>Instructors</NavLink></li>
                        <li> <NavLink to="/allclasses" className="m-3"><FaShoppingCart></FaShoppingCart>Classes</NavLink></li>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Dashboard;