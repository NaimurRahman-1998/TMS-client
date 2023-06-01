import { createBrowserRouter } from "react-router-dom";
import UpdateModal from "../Components/Modal";
import MainLayout from "../layout/MainLayout";
import AddTask from "../pages/Add Task/AddTask";
import Home from "../pages/home/Home";
import Welcome from "../pages/Welcome/Welcome";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Welcome></Welcome>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/update',
                element: <UpdateModal></UpdateModal>
            }
        ]
    },
]);

export default router