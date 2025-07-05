import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Loading from "../pages/Loading";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import CategoryProducts from "../components/CategoryProducts";
import PrivateRoute from "../provider/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";













const router = createBrowserRouter([
{
path : "/",
element : <HomeLayout></HomeLayout>,

children : [
    {
        path : "/",
       element :<Home></Home>,
       
        hydrateFallbackElement : <Loading></Loading>,
    },
]
},
{
path : "/auth",
element : <AuthLayout></AuthLayout>,
children : [
    {
        path : "/auth/login",
        element : <Login></Login>,
    },
    {
        path : "/auth/register",
        element : <Register></Register>,
    },
    {
        path : "/auth/forgot-password",
        element : <ForgotPassword></ForgotPassword>,
    },
]
},

{
    path : "/category/:categoryName",
    element : <CategoryProducts></CategoryProducts>,
},

{
 path :"/product/:id",
 element : (
    <PrivateRoute>
        <ProductDetails></ProductDetails>
    </PrivateRoute>
 )
},






{
path : "/*",
element : <ErrorPage></ErrorPage> ,
},

]);

export default router;