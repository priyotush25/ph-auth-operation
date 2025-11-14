import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import RootLayout from "../RooLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
