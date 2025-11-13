import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AddReview from "../pages/AddReview";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AllReview from "../pages/AllReview";
import MyReviews from "../pages/MyReviews";
import EditReview from "../pages/EditReview";

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
      {
        path: "myreviews",
        element:<PrivateRoute>
          <MyReviews/>
        </PrivateRoute>,
      },
      {
        path: "editreview/:id",
        element:<PrivateRoute>
          <EditReview/>
        </PrivateRoute>,
      },
      { path: "*", 
        Component: NotFound },
    ],
  },
]);
export default router;
