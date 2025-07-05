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
import CategoriesPage from "../pages/CategoriesPage";













const router = createBrowserRouter([
{
path : "/",
element : <HomeLayout></HomeLayout>,
hydrateFallbackElement: <Loading></Loading>,
children : [
    {
        path : "/",
       element :<Home></Home>,
        loader: async () => {
          const res = await fetch("http://localhost:3000/products");
          const products = await res.json();
          return products;
        },
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
    hydrateFallbackElement : <Loading></Loading>,
},

{
 path :"/product/:id",
 element : (
    <PrivateRoute>
        <ProductDetails></ProductDetails>
    </PrivateRoute>
 ),
 hydrateFallbackElement : <Loading></Loading>
},

{
    path : "/all-categories",
    element : <CategoriesPage></CategoriesPage>,
    hydrateFallbackElement : <Loading></Loading>,
},




{
path : "/*",
element : <ErrorPage></ErrorPage> ,
},

]);

export default router;