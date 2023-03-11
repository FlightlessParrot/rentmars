import { createBrowserRouter } from "react-router-dom";
import Warp from "./warp";
import Main from "./main";
import Contact from "./contact";
import Shop from "./shop_pattern.js";
import shopLoader from "./loaders/shop_loader";
import Admin from "./admin";
import adminAction from "./actions/admin_action";
import AdminPanel from "./admin_files/admin_panel";
import AddProduct from "./admin_files/add_product";
import addProductAction from "./actions/add_product_action";
import downloadImage from "./loaders/download_image";
import ChangeProduct from "./admin_files/editing_products/change_product";
import removeAction from "./actions/remove_action";
import ConfirmRemoval from "./admin_files/editing_products/confirm_removal";
import AddPhoto from "./admin_files/editing_products/add_photo";
import addEditPhoto from "./actions/add_edit_photo_action";
import productFromIdLoader from "./loaders/product_from_id_loader"
import updateProduct from "./actions/update_product_action";
const photoShop = [
  "/images/images/shop_main_photos/1.jpg",
  "/images/images/shop_main_photos/2.jpg",
  "/images/images/shop_main_photos/3.jpg",
];
const photoRent = [
  "/images/images/rent_main_photos/1.jpg",
  "/images/images/rent_main_photos/2.jpg",
  "/images/images/rent_main_photos/3.jpg",
];
const shopText = {
  photoText: "Witaj w Naszym sklepie",
};
const rentText = {
  photoText: "Witaj w Naszej wypożyczalni",
};
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
          element: (
            <Shop key={1} photos={photoShop} shop={true} text={shopText} />
          ),
        },
        {
          path: "rent",
          loader: shopLoader,
          element: (
            <Shop key={2} photos={photoRent} shop={false} text={rentText} />
          ),
        },
      ],
    },

    {
      path: "/admin",
      action: adminAction,
      element: <Admin />,
      children: [
        {
          path: "panel",
          element: <AdminPanel />,
          children: [
            {
              path: "add-product",
              element: <AddProduct edit={false}/>,
              action: addProductAction,
            },
            {
              path: "edit-product",
              element: <ChangeProduct />,
              loader: shopLoader,
              children: [
                {
                    path:'remove/:shop/:id/confirm',
                    element: <ConfirmRemoval/>,
                    loader:({params})=>{return {database: params.shop, id: params.id}},
                    action:removeAction,

                }
              ],
            },
            {
              path: "edit-product/desc/:shop/:id",
              element: <AddProduct  edit={true}/>,
              loader: productFromIdLoader,
              action: updateProduct
            },
            {
              path: "edit-product/images/:shop/:id",
              loader: downloadImage,
              action: addEditPhoto,
              element: <AddPhoto />,
              children: [
                {
                    path:'remove/:shop/:id/confirm',
                    element: <ConfirmRemoval/>,
                    loader:({params})=>{return {database: params.shop, id: params.id}},
                    action:removeAction,

                }
              ],
            },
          ],
        },
      ],
    },
  ],
  { basename: "/" }
);
