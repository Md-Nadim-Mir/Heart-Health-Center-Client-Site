import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Test from "../Pages/Test";
import Ambulance from "../Pages/Ambulance";
import BloodBank from "../Pages/BloodBank";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Health_Tips from "../Pages/Health_Tips";
import ErrorPage from "../Pages/ErrorPage";
import Test_Details from "../Pages/Test_Details";
import PrivateRoutes from "./PrivateRoutes";
import { allUser, getAllTest, getBlogs, getBlogsId, getDoctor, singleTest } from "../../api/test";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../../Dashboard/SideBar/AdminMenu/Statistics";


import ManageUsers from "../../Dashboard/SideBar/AdminMenu/ManageUsers";
import TestsManage from "../../Dashboard/SideBar/AdminMenu/TestsManage";
import DoctorManage from "../../Dashboard/SideBar/AdminMenu/DoctorManage";
import BlogsManage from "../../Dashboard/SideBar/AdminMenu/BlogsManage";
import HealtCardDetails from "../Pages/HealtCardDetails";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import MyBooking from "../../Dashboard/SideBar/UserMenu/MyBooking";
import UserStatistics from "../../Dashboard/SideBar/UserMenu/UserStatistics";
import ManageBooking from "../../Dashboard/SideBar/AdminMenu/ManageBookings";
import TestReport from "../../Dashboard/SideBar/UserMenu/TestReport";


 export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/test',
            element:<Test></Test>
        },
        {
            path : '/test-details/:id',
            loader: ({params})=>singleTest(params.id),
            element: <PrivateRoutes><Test_Details></Test_Details></PrivateRoutes>
        },
        {
            path:'/ambulance',
            element:<Ambulance></Ambulance>
        },
        {
            path:'/bloodBank',
            element:<BloodBank></BloodBank>
        },
        {
           path:'/health-tips',
           element: <Health_Tips></Health_Tips>,
           loader : ()=>getBlogs()
        },
        {
            path:'/healthCard-details/:id',
            element: <HealtCardDetails></HealtCardDetails>,
            loader: ({params})=>getBlogsId(params.id)
        }
      ]
    },
    {
        path:'/login',
        errorElement: <ErrorPage></ErrorPage>,
        element:<Login></Login>
    },
    {
        path:'/register',
        errorElement: <ErrorPage></ErrorPage>,
        element:<Register></Register>
    },

    {
        path:'/dashboardLayout',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [

            // admin route

            {
                path:'statistics',
                element:<AdminRoute><Statistics></Statistics></AdminRoute>
            },
            {
                path:'manage-users',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
                loader:()=>allUser()
            },
            {
                path:'manage-bookings',
                element:<AdminRoute><ManageBooking></ManageBooking></AdminRoute>
            },
            {
                path:'tests-manage',
                element: <AdminRoute><TestsManage></TestsManage></AdminRoute> ,
                loader : ()=>getAllTest()
               
            },

            {
                path: 'doctor-manage',
                element: <AdminRoute><DoctorManage></DoctorManage></AdminRoute>,
                loader : ()=>getDoctor()

            },
            {
                path:'blogs-manage',
                element: <AdminRoute><BlogsManage></BlogsManage></AdminRoute>,
                loader : ()=>getBlogs()
            },

            //  user route

            {
                path:'my-bookings',
                element: <UserRoute><MyBooking></MyBooking></UserRoute>
            },
            {
                path: 'user-statistics',
                element:<UserRoute><UserStatistics></UserStatistics></UserRoute>
            },
            {
                path: 'test-report',
                element: <UserRoute><TestReport></TestReport></UserRoute>
            }

        ]
    }
    
  ]);