import { createBrowserRouter } from "react-router-dom";
import Warp from "./warp";
import Main from './main'
import Contact from "./contact";
import Shop from "./shop_pattern.js"
import shopLoader from "./loaders/shop_loader";
const photoShop=[
    '/images/images/shop_main_photos/1.jpg',
    '/images/images/shop_main_photos/2.jpg',
    '/images/images/shop_main_photos/3.jpg',
]
const photoRent=[
    '/images/images/rent_main_photos/1.jpg',
    '/images/images/rent_main_photos/2.jpg',
    '/images/images/rent_main_photos/3.jpg',
]
const shopText={
    photoText: 'Witaj w Naszym sklepie',
}
const rentText={
    photoText: 'Witaj w Naszej wypożyczalni',
}
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
                loader: shopLoader,
                element: <Shop key={1} photos={photoShop} shop={true} text={shopText} />,
            },
            {
                path: "rent",
                loader: shopLoader,
                element: <Shop key={2} photos={photoRent} shop={false} text={rentText} />,
            }
        ]
        }
       
    ], 
    {basename: "/",}
)