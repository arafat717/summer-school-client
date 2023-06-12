import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructors/Instructors";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/NotFound/NotFound";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layouts/Dahsboard/Dashboard";
import SelectedClass from "../pages/SelectedClass/SelectedClass";
import Enroled from "../pages/Enroled/Enroled";
import ManageUsers from "../pages/ManageUsers/ManageUsers";
import ManageClasses from "../pages/ManageClasses/ManageClasses";
import AddClass from "../pages/AddClass/AddClass";
import MyClass from "../pages/MyClass/MyClass";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'instructors',
                element: <PrivateRoutes><Instructors></Instructors></PrivateRoutes>
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    },
    {
        path:'/dasboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: 'selectedclass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enroll',
                element: <Enroled></Enroled>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            }
        ]
    }
]);

export default router;