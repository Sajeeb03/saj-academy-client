import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header></Header>
    }
])

export default router;