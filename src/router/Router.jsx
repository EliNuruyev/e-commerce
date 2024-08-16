import RootLayout from "../layout/RootLayout";
import Product from "../pages/Product";
// eslint-disable-next-line react-refresh/only-export-components
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "product/:id",
    element: <Product />,
  },
];

export default routes;
