import { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Spinner } from "@/components/index";
import ProtectRoutes from "@/components/shared/ProtectRoutes"

// Lazy-loaded components
const Error = lazy(() => import("@/_root/pages/error/Error"));
const HomePage = lazy(() => import("@/_root/pages/HomePage"));
const ProductDetails = lazy(() => import("@/_root/pages/ProductDetails"));
const ProductsPage = lazy(() => import("@/_root/pages/ProductsPage"));
const CartPage = lazy(() => import("@/_root/pages/CartPage"));
const CategoriesPage = lazy(() => import("@/_root/pages/CategoriesPage"));
const ProfilePage = lazy(() => import("@/_root/pages/ProfilePage"));
const CheckoutPage = lazy(() => import("@/_root/pages/CheckoutPage"));
const RootLayout = lazy(() => import("@/_root/RootLayout"));
const AuthLayout = lazy(() => import("@/_auth/AuthLayout"));
const LoginPage = lazy(() => import("@/_auth/LoginPage"));
const RegisterPage = lazy(() => import("@/_auth/RegisterPage"));

const AuthRoutes = {
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
}
const RootRoutes = {
    path: "/",
    element: <RootLayout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: "categories",
            element: <CategoriesPage />
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
            element: <ProtectRoutes />,
            children: [
                {
                    path: "cart",
                    element: <CartPage />
                },
                {
                    path: "checkout",
                    element: <CheckoutPage />
                },
                {
                    path: "profile",
                    element: <ProfilePage />
                }
            ]
        }
    ]
}


const APPROUTER = createBrowserRouter([
    {
        errorElement: <Error />
    },
    AuthRoutes,
    RootRoutes
]);
const AppRouter = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <RouterProvider router={APPROUTER} />
        </Suspense>
    )
}

export default AppRouter