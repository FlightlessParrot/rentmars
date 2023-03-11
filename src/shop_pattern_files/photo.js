import { useEffect } from "react";
import { useReducer } from "react";

export default function Photo(props) {
  const white = { background: "#FFFFFF" };
  const gray = { background: "#D9D9D9" };
  const photo = [props.photo1, props.photo2, props.photo3];
  
  const initialValue = {
    photoNumber: 1,
    currentPhoto: props.photo1,
  };

  const [photoReducer, dispatchPhoto] = useReducer(changePhoto, initialValue);
  useEffect(() => {
    const time = setTimeout(() => dispatchPhoto("next"), 6000);
    return (
      () => {
        clearTimeout(time);
      })
  },
  [photoReducer.currentPhoto]);

  function changePhoto(state, action) {
    switch (action) {
      case "next":
        if (state.photoNumber === 3) {
          return {
            photoNumber: 1,
            currentPhoto: photo[0],
          };
        } else {
          return {
            photoNumber: state.photoNumber + 1,
            currentPhoto: photo[state.photoNumber],
          };
        }
      case "prev":
        if (state.photoNumber === 1) {
          return {
            photoNumber: 3,
            currentPhoto: photo[2],
          };
        } else {
          return {
            photoNumber: state.photoNumber - 1,
            currentPhoto: photo[state.photoNumber - 2],
          };
        }
    }
  }

  return (
    <div className="photo_frame">
      <img src={photoReducer.currentPhoto} key={photoReducer.photoNumber} alt="" />
      <div className="photo_option_div">
        <div className="left_arrow" onClick={() => dispatchPhoto("prev")}><img src='/images/images/arrow.png' alt='poprzedni obrazek' /></div>
        <div
          className="right_arrow"
          onClick={() => dispatchPhoto("next")}
        ><img src='/images/images/arrow.png' alt='następny obrazek' /></div>
      </div>
      <div className="photo_description">
        <h1>{props.photoText}</h1>
        <div className="circle">
          <div style={photoReducer.photoNumber === 1 ? white : gray}></div>
          <div style={photoReducer.photoNumber === 2 ? white : gray}></div>
          <div style={photoReducer.photoNumber === 3 ? white : gray}></div>
        </div>
      </div>
    </div>
  );
}
