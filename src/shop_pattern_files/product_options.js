import { useState } from "react";
import { useRef } from "react";
import { Form,  useSubmit } from "react-router-dom";

import Categories from "./categories";




export default function ProductOptions(props) {
 
  const submit = useSubmit();
  const formRef = useRef(null);
  const buildRef = useRef(null);
  const gardRef = useRef(null);
  const [search, setSearch] = useState("");
  
const elements=
[{photo: '/images/images/categories/mixer.png',
ref: buildRef,
icon: '/images/images/categories/excavator-64.png',
text: 'Maszyny budowlane'},
{photo: '/images/images/categories/grass_cutter.jpg',
ref: gardRef,
icon: '/images/images/categories/garden_icon.png',
text: 'Maszyny ogrodnicze'},

]
  return (
    <Form method="get" ref={formRef} className="product_options">
      <h2>Czego szukasz?</h2>
      <fieldset className="radio_options">
        <input
          
          ref={buildRef}
          type="radio"
          name="category"
          value="shop"
          required
        ></input>
        <input
         onChange={() => {
          submit(formRef.current,{method: 'get'});
        }}
          ref={gardRef}
          type="radio"
          name="category"
          value="rent"
          required
        ></input></fieldset>
        <Categories elements={elements} formRef={formRef} submit={submit}/>
      
      <div className="checkbox_div"><input type="checkbox" name="new" value="new"  onChange={() => {
          if(buildRef.current.checked || gardRef.current.checked){submit(formRef.current,{method: 'get'})};
        }} id='newMachines'></input> <label htmlFor="newMachines" >Czy wyszukiwać tylko nowe maszyny?</label></div>
      <div className="orange_line"></div>
      <p>Zbyt wiele produktów?</p>
      <b>Wypróbuj naszą wyszukiwarkę!</b>
      <div className="search_div"><input
        onChange={(e) => setSearch(e.currentTarget.value)}
        type="search"
        name="search"
        maxLength="80"
        value={search}
      ></input>
      <button>
        <img src="/images/icons/search-50.png" alt="ikona lupy" />
      </button></div>
    </Form>
  );
}
