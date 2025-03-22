import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import RootLayout from "./_root/RootLayout";
import { HomePage, Products, ProductDetails, Error } from "./_root";

// Create a client
const queryClient = new QueryClient()

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
        element: <Products />
      },
      {
        path: "products/:id",
        element: <ProductDetails />
      },
    ]
  }
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={APPROUTER} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App