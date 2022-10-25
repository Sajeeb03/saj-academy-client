import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentications/Login";
import Register from "../components/Authentications/Register";
import ErrorPage from "../components/Pages/ErrorPage";

import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])

export default router;