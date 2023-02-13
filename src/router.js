import { createBrowserRouter } from "react-router-dom";
import Warp from "./warp";
import Main from './main'
import Contact from "./contact";
export const router = createBrowserRouter(
    [
        {
           
        path: "/",
        element: <Warp />,
        children: [
            {
                path: "main",
                element: <Main />,
            },
            {
                path: "contact",
                element: <Contact />,
            }
        ]
        }
       
    ], 
    {basename: "/",}
)