import Photo from "./shop_pattern_files/photo";
import ProductOptions from "./shop_pattern_files/product_options";
import { Link } from "react-router-dom";
import Products from "./shop_pattern_files/products";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
export default function ShopPattern(props) {
  const data = useLoaderData();
  useEffect(() => console.log(data), [data]);
  return (
    <>
      <div className="placeholder"> </div>
      <Photo
        photo1={props.photos[0]}
        photo2={props.photos[1]}
        photo3={props.photos[2]}
        photoText={props.text.photoText}
      />
      <ProductOptions />
      <div className="orange_div">
        <h2>Zobacz nasze produkty</h2>{" "}
      </div>
      <div className="contact_info">
        <b>Zamówienie możesz złożyć mailowo lub telefoniczne</b>
        <Link to="/contact">Kontakt</Link>
      </div>
      <div className="products">
        <Products products={data} shop={true} />
      </div>
    </>
  );
}
