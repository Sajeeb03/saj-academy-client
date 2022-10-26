import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentications/Login";
import Register from "../components/Authentications/Register";
import Blogs from "../components/Pages/Blogs";
import Course from "../components/Pages/Course";
import Courses from "../components/Pages/Courses";
import ErrorPage from "../components/Pages/ErrorPage";
import FAQ from "../components/Pages/FAQ";
import Home from "../components/Pages/Home";
import Terms from "../components/Pages/Terms";

import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/terms",
                element: <Terms></Terms>
            },
            {
                path: "/courses",
                element: <Courses />,
                loader: () => fetch("https://learning-platform-server.vercel.app/courses")
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/course/:id",
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://learning-platform-server.vercel.app/courses/${params.id}`)
            }
        ]
    }
])

export default router;