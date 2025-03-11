import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import { HomePage, Error } from "./_root";

const APPROUTER = createBrowserRouter([
  {
    errorElement: <Error />
  },
  // Auth Routes
  // Root Routes
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />
      }
    ]
  }
]);
const App = () => {
  return <RouterProvider router={APPROUTER} />
}

export default App