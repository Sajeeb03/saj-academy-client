import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    }
])

export default router;