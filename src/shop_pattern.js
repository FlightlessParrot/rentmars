import Photo from "./shop_pattern_files/photo";
import ProductOptions from "./shop_pattern_files/product_options";
import { Link, Outlet } from "react-router-dom";
import Products from "./shop_pattern_files/products";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShopPattern(props) {
  const data=useLoaderData();

  useEffect(() => {console.log(data)}, [data]);
  return (
    <>
      <div className="placeholder"> </div>
      <Photo
        photo1={props.photos[0]}
        photo2={props.photos[1]}
        photo3={props.photos[2]}
        photoText={props.text.photoText}
      />
      <ProductOptions shop={props.shop}/>
      <div className="orange_div">
        <h2>Zobacz nasze produkty</h2>{" "}
      </div>
      <div className="contact_info">
        <b>Zamówienie możesz złożyć mailowo lub telefoniczne</b>
        <Link to="/contact">Kontakt</Link>
      </div>
   
      <div className="products">
       {data?.products && <Products products={data.products} images={data.images} shop={props.shop} />}
      </div>
      <Outlet  />
    
    </>
  );
}
