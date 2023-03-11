import { useEffect, useState } from "react";
import { useRef } from "react";
import { Form,  useLoaderData,  useSubmit } from "react-router-dom";

export default function SearchForm(props) {
  const submit = useSubmit();
  const formRef = useRef(null);
  const [search, setSearch] = useState("");
  const data=useLoaderData()
useEffect(
  ()=>submit(formRef.current, {method: 'get'}),[search]
)
  return (
    <Form method="get" ref={formRef} className="product_options admin_product_option">
      <fieldset>
        <label htmlFor="shop">Sklep</label>
        <input id="shop" type="radio" name="shop" value={true} required onChange={(e) => {
            submit(formRef.current, { method: "get" });
            props.setShop(e.currentTarget.checked ? 'shop' : 'rent')
          }} defaultChecked></input>
        <label htmlFor="rent">Wypożyczalnia</label>
        <input
          onChange={(e) => {
            submit(formRef.current, { method: "get" });
            props.setShop(!e.currentTarget.checked ? 'shop' : 'rent')
          }}
          
          id='rent'
          type="radio"
          name="shop"
          value={false}
          required
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="building">Maszyny budowlane</label>
        <input id='building' type="radio" name="category" value={true} required onChange={() => {
            submit(formRef.current, { method: "get" });
          }} defaultChecked></input>
        <label htmlFor="garden">Maszyny Ogrodnicze</label>
        <input
          onChange={() => {
            submit(formRef.current, { method: "get" });
          }}
          
          id='garden'
          type="radio"
          name="category"
          value={false}
          required
        ></input>
      </fieldset>

      <div className="checkbox_div">
        <input
          type="checkbox"
          name="new"
          value="new"
          onChange={() => {
              submit(formRef.current, { method: "get" });
            }
          }
          id="newMachines"
        ></input>{" "}
        <label htmlFor="newMachines">Czy wyszukiwać tylko nowe maszyny?</label>
      </div>
      <div className="orange_line"></div>

      <div className="search_div">
        <input
          onChange={(e) => setSearch(e.currentTarget.value)}
          type="search"
          name="search"
          maxLength="80"
          value={search}
        ></input>
        <button>
          <img src="/images/icons/search-50.png" alt="ikona lupy" />
        </button>
      </div>
    </Form>
  );
}
