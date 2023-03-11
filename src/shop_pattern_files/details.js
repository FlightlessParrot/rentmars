import { useReducer } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Details() {
  const initValue = {
    mainPhoto: 1,
    photoNumber: 1,
  };
 
  const context = useOutletContext();
  const loaderData = useLoaderData;
  const [carusel, setCarusel] = useReducer(reducer, initValue, setInitValue);
  const product = context.products.filter((e) => e.id === loaderData.id)[0];
  const photoPath = context.images.filter((e) => e.productId === loaderData.id);
  const photos = photoPath.map((e, index) => {
    return (
      <div className={"details-photo " + setClass(index)} key={e.id}>
        <img src={"/server" + e.path} alt="zdjęcie produktu" />
      </div>
    );
  });
  function setClass(index) {
    const number = index + 1;
    switch (number) {
      case number === carusel.mainPhoto:
        return "main";
      case number - carusel.mainPhoto === -1:
       
        return "second-bef";
        case  number - carusel.mainPhoto === 1:
            return "second-after"
      case number - carusel.mainPhoto === -2:
        return "third-bef"
       case number - carusel.mainPhoto === 2:
        return "third-after";
    }
  }
function setInitValue(){
return{
    mainPhoto: 1,
    photoNumber: photos.length
}
}
  return (
    <div className="darkness">
      <div className="details">
        <div className="photo-carusel"></div>
      </div>
    </div>
  );
}
