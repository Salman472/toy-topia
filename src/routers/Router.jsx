import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import LogIn from "../components/LogIn";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoutes/PrivateRoute";

import ViewMore from "../pages/ViewMore";
import ErrorPage from "../pages/ErrorPage.";
import Toys from "../pages/Toys";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                index:true,
                element:<Home/>,
                loader:()=>fetch('../toyData.json')
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path:'/all-toys',
                element:<PrivateRoute><Toys/></PrivateRoute>,
                loader:()=>fetch('../toyData.json')
            },
            {
                path:'/login',
                element:<LogIn/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/view-more/:id',
                element:<PrivateRoute><ViewMore/></PrivateRoute>,
                loader:()=>fetch("../toyData.json")
            },
            {
                path:'/*',
                element:<ErrorPage/>
            },
           
        ]
    }
])