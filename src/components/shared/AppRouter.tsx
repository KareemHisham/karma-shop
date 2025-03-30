import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Error, HomePage, ProductDetails, ProductsPage, CartPage } from "@/_root";
import RootLayout from "@/_root/RootLayout";
import { AuthLayout, LoginPage, RegisterPage } from "@/_auth";

const APPROUTER = createBrowserRouter([
    {
        errorElement: <Error />
    },
    // Auth Routes
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <RegisterPage />
            },
        ]
    },
    // Root Routes
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "categories/products/:prefix",
                element: <ProductsPage />
            },
            {
                path: "products/:id",
                element: <ProductDetails />
            },
            {
                path: "cart",
                element: <CartPage />
            }
        ]
    }
]);
const AppRouter = () => {
    return <RouterProvider router={APPROUTER} />
}

export default AppRouter