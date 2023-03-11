import SearchForm from "./search_form";
import Products from "./edit_products";

import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";
import { useState } from "react";
export default function ChangeProduct()
    {
        const context=useOutletContext()
        const data=useLoaderData();
        const [shop, setShop]=useState('shop')
       
        return(<>
            <Outlet context={context} />
            <SearchForm setShop={setShop}/>
           
            <div className="products">
              {data?.products && <Products products={data.products} images={data.images} shop={shop}/>}
              </div>
              </>
              );
   
    }
