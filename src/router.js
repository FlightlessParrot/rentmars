import { createBrowserRouter } from "react-router-dom";
import Warp from "./warp";
import Main from './main'
import Contact from "./contact";
import Shop from "./shop_pattern.js"
const photoShop=[
    '/images/images/shop_main_photos/1.jpg',
    '/images/images/shop_main_photos/2.jpg',
    '/images/images/shop_main_photos/3.jpg',
]

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
            },
            {
                path: "shop",
                element: <Shop photos={photoShop} />,
            }
        ]
        }
       
    ], 
    {basename: "/",}
)