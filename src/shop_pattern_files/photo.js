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
    const time = setTimeout(() => dispatchPhoto("next"), 4000);
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
      <img src={photoReducer.currentPhoto} alt="" />
      <div className="photo_option_div">
        <div className="left_arrow" onClick={() => dispatchPhoto("prev")}></div>
        <div
          className="right_arrow"
          onClick={() => dispatchPhoto("next")}
        ></div>
      </div>
      <div className="photo_description">
        <p>{props.photoText}</p>
        <div className="circle">
          <div style={photoReducer.currentPhoto === 1 ? white : gray}></div>
          <div style={photoReducer.currentPhoto === 2 ? white : gray}></div>
          <div style={photoReducer.currentPhoto === 3 ? white : gray}></div>
        </div>
      </div>
    </div>
  );
}
