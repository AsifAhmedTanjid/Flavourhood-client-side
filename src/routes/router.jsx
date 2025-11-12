import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AddReview from "../pages/AddReview";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AllReview from "../pages/AllReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "allreviews",
        element:<AllReview></AllReview>,
      },
      {
        path: "addreview",
        element:<PrivateRoute>
          <AddReview></AddReview>
        </PrivateRoute>,
      },
      { path: "*", 
        Component: NotFound },
    ],
  },
]);
export default router;
