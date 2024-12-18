import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import ProductList from "./Pages/ProductList";
import ProductDetail from "./Pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>there is error page</h1>,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
