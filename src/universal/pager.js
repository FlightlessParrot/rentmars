import { useEffect, useReducer } from "react";

export default function Pager(props) {
  const initValue = {
    currentPage: 0,
    pages: 0,
    elements: 0,
    pageNumbers: 0,
  };
  const numbersFunction = (currentPage, pages) => {
    const array = [];
    let i = currentPage - 2;
    if (currentPage < 3) i = 1;
    for (; i < currentPage + 3 && i <= pages; i++) {
      const y = i;
      array.push(
        <button
          className={y !== currentPage ? "page" : "page chosen-page"}
          key={y}
          onClick={() => dispatch(y)}
        >
          {y}
        </button>
      );
    }
    console.log(array);
    return array;
  };

  const [pager, dispatch] = useReducer(reducer, initValue, setInitValue);
  useEffect(() => {
    dispatch("clear");
  }, [props.jsxProducts]);

  const showProducts = props.jsxProducts.filter(
    (element, index) =>
      index < pager.currentPage * pager.elements &&
      index > (pager.currentPage - 1) * 20
  );

  function reducer(state, action) {
    switch (action) {
      case "prev":
        if (state.currentPage > 1) {
          return {
            ...state,
            currentPage: state.currentPage - 1,
            pageNumbers: numbersFunction(state.currentPage - 1, state.pages),
          };
        } else {
          return { ...state };
        }
      case "next":
        if (state.currentPage === state.pages) {
          return { ...state };
        } else {
          return {
            ...state,
            currentPage: state.currentPage + 1,
            pageNumbers: numbersFunction(state.currentPage + 1, state.pages),
          };
        }
      case "clear":
        return setInitValue();
      default:
        return {
          ...state,
          currentPage: action,
          pageNumbers: numbersFunction(action, state.pages),
        };
    }
  }
  function setInitValue() {
    const length = props.jsxProducts.length;
    const pages = Math.ceil(length / 20);

    const currentPage = 1;
    const elements = 20;
    return {
      currentPage,
      pages,
      elements,
      pageNumbers: numbersFunction(currentPage, pages),
    };
  }

  return (
    <>
      {showProducts}
      {pager.pages !== 1 && (
        <div className="pager">
          {" "}
          <button onClick={() => dispatch("prev")}>{"<"}</button>
          {pager.pageNumbers}
          <button onClick={() => dispatch("next")}>{">"}</button>
        </div>
      )}
    </>
  );
}
