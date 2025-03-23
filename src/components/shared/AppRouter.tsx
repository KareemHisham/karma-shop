import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Error, HomePage, ProductDetails, ProductsPage } from "@/_root";
import RootLayout from "@/_root/RootLayout";

const APPROUTER = createBrowserRouter([
    {
        errorElement: <Error />
    },
    // Auth Routes
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
        ]
    }
]);
const AppRouter = () => {
    return <RouterProvider router={APPROUTER} />
}

export default AppRouter