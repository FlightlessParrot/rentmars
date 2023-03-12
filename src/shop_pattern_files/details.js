import { useReducer } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
export default function Details() {
  const initValue = {
    mainPhoto: 1,
    photoNumber: 1,
  };
 const navigate=useNavigate();
  const loaderData= useLoaderData();
  console.log(loaderData)

 const [carusel, dispatch] = useReducer(reducer, initValue, setInitValue);
  const product = loaderData.product[0];
  const photos = loaderData.images.map((e, index) => {
    const cla=setClass(index)
    return (
      <div className={"details-photo " + cla} key={e.id} onClick={()=>dispatch(index+1)}>
        <img src={"/server" + e.path} alt="zdjęcie produktu" />
      </div>
    );
  });
   console.log(carusel.photoNumber)
  const showPhotos= photos.filter(
    (element,index)=>index<=carusel.mainPhoto+1 && index>=carusel.mainPhoto-3 
  )


  function setClass(index) {
    console.log(carusel.mainPhoto)
    console.log(index)
    const number = index + 1;

    switch (number) {
      case carusel.mainPhoto:
        return "main";
      case carusel.mainPhoto + 1:
       
        return "second-bef";
        case carusel.mainPhoto - 1:
            return "second-after"
      case  carusel.mainPhoto -2:
        return "third-bef"
       case  carusel.mainPhoto + 2:
        return "third-after";
        default:
          console.log('Błąd klasy zdjęcia')
    }
  }

  function setInitValue()
  {
    const photoNumber=loaderData.images.length
    return{
      mainPhoto: 1,
      photoNumber
    }
  }


function reducer(state, action)
{
  
  switch(action){
    case 'next':
      return state.photoNumber===state.mainPhoto ? {mainPhoto: 1, photoNumber: state.photoNumber} : {mainPhoto: state.mainPhoto+1, photoNumber: state.photoNumber};
    case 'prev':
      return state.mainPhoto ===1 ? {mainPhoto: state.photoNumber, photoNumber: state.photoNumber} :{mainPhoto: state.mainPhoto-1, photoNumber: state.photoNumber}
      default: 
      return {...state, mainPhoto: action}

  }

}
  return (
    <div className="darkness" onClick={()=>navigate('/'+loaderData.shop)}>
      <div className="details" onClick={(e)=>e.stopPropagation()}>
        <Link to={'/'+loaderData.shop}>Wróć</Link>
        <div className="photo-carusel">
        <button className="arrow" onClick={()=>dispatch('prev')}>{'<'}</button><div className="photo">{showPhotos}</div>
        <button className="arrow" onClick={()=>dispatch('next')}>{'>'}</button>
        </div>
        <h2>{product.name}</h2>
       {product?.price && product.price!==0 && <h3> Cena: {product.price} zł</h3>}
        <p>{product.description}</p>
      </div>
    </div>
  );
}
