import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import Warp from "./warp";
import Loading from "./universal/loading";

import shopLoader from "./loaders/shop_loader";
import adminAction from "./actions/admin_action";
import addProductAction from "./actions/add_product_action";
import downloadImage from "./loaders/download_image";
import removeAction from "./actions/remove_action";

import addEditPhoto from "./actions/add_edit_photo_action";
import productFromIdLoader from "./loaders/product_from_id_loader"
import updateProduct from "./actions/update_product_action";
import changePassword from "./actions/change_password";

const Main = React.lazy(()=>import("./main"))
const Contact =React.lazy(()=>import("./contact"));
const Shop = React.lazy(()=>import("./shop_pattern.js"));
const Admin = React.lazy(()=>import("./admin"));
const AddProduct = React.lazy(()=>import("./admin_files/add_product"));
const AdminPanel = React.lazy(()=>import("./admin_files/admin_panel"));;
const ChangeProduct = React.lazy(()=>import("./admin_files/editing_products/change_product"));
const ConfirmRemoval = React.lazy(()=>import("./admin_files/editing_products/confirm_removal"));
const AddPhoto = React.lazy(()=>import("./admin_files/editing_products/add_photo"));
const Details = React.lazy(()=>import("./shop_pattern_files/details"));
const ChangePassword = React.lazy(()=>import("./admin_files/change_password"));
// const shopLoader=async ({request, params})=>{
//    const { default: loader}=await import("./loaders/shop_loader")
// return loader({request, params})}


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
          element:<Suspense fallback={<Loading />}> <Main /></Suspense>,
        },
        {
          path: "contact",
          element:<Suspense fallback={<Loading />}> <Contact /> </Suspense>,
        },
        {
          path: "shop",
          loader: shopLoader,
          element: (
            <Suspense fallback={<Loading />}>  <Shop key={1} photos={photoShop} shop={true} text={shopText} /></Suspense>
          ),
          children:[]
        },
       
        {
          path: "rent",
          loader: shopLoader,
          element: (
            <Suspense fallback={<Loading />} > <Shop key={2} photos={photoRent} shop={false} text={rentText} /></Suspense>
          ),
        },  
        {
          path: ":shop/:id",
          loader: productFromIdLoader,
          element:<Suspense fallback={<Loading />}>  <Details /></Suspense>,

        },
      ],
    },

    {
      path: "/admin",
      action: adminAction,
      element: <Suspense fallback={<Loading />}> <Admin /></Suspense>,
      children: [
        {
          path: "panel",
          element:<Suspense fallback={<Loading />}>  <AdminPanel /></Suspense>,
          children: [
            {
              path: "add-product",
              element: <Suspense fallback={<Loading />}> <AddProduct edit={false}/> </Suspense>,
              action: addProductAction,
            },
            {
              path: "edit-product",
              element: <Suspense fallback={<Loading />}> <ChangeProduct /> </Suspense>,
              loader: shopLoader,
              children: [
                {
                    path:'remove/:shop/:id/confirm',
                    element:<Suspense fallback={<Loading />}>  <ConfirmRemoval/> </Suspense>,
                    loader:({params})=>{return {database: params.shop, id: params.id}},
                    action:removeAction,

                }
              ],
            },
            {
              path: "edit-product/desc/:shop/:id",
              element: <Suspense fallback={<Loading />}> <AddProduct  edit={true}/> </Suspense>,
              loader: productFromIdLoader,
              action: updateProduct
            },
            {
              path: "edit-product/images/:shop/:id",
              loader: downloadImage,
              action: addEditPhoto,
              element: <Suspense fallback={<Loading />}> <AddPhoto /> </Suspense>,
              children: [
                {
                    path:'remove/:shop/:id/confirm',
                    element: <Suspense fallback={<Loading />}> <ConfirmRemoval/> </Suspense>,
                    loader:({params})=>{return {database: params.shop, id: params.id}},
                    action:removeAction,

                }
              ],
            },
            {
              path:'change-password',
              element: <ChangePassword />,
              action: changePassword
            }
          ],
        },
      ],
    },
  ],
  { basename: "/" }
);
