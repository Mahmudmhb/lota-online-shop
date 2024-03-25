import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Components/Products/ProductDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyWishlist from "../Components/MyWishlist/MyWishlist";
import MyCart from "../Components/MyCart/MyCart";
import BlogDetails from "../Pages/Blogs/BLogDetails/BlogDetails";
import AllBlogs from "../Pages/Blogs/AllBlogs/AllBlogs";
import Products from "../Pages/Shop/Products/Products";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/wishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/shop",
        element: <Products></Products>,
      },
    ],
  },
]);
