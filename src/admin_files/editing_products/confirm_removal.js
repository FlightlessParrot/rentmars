import { useEffect, useState } from "react";
import {
  Link,
  useActionData,
  useLoaderData,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { Form } from "react-router-dom";
export default function ConfirmRemoval() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const data = useLoaderData();
  const actionData = useActionData();
  const context = useOutletContext();
  console.log(actionData?.success);
  useEffect(() => {
    if (actionData?.success) {
      const add = actionData.success
        ? " Za chwilę wrócisz na poprzednią podstronę."
        : "";
      actionData?.message && setMessage(actionData.message + add);

      if (actionData.success) {
        const time = setTimeout(() => navigate("../"), 3300);
     
        return () => clearTimeout(time);
      }
    }
  }, [actionData]);
  return (
    <div className="darkness" onClick={() => navigate("../")}>
      <div onClick={(e) => e.stopPropagation()} className="confirm-removal">
        <b className="important-message">{message}</b>
        <b>
          {" "}
          Czy na pewno chcesz usunąć{" "}
          {data.database === "images" ? "to zdjęcie" : "ten produkt"}?
        </b>
        <Form method="post">
          <input
            type="text"
            name="login"
            value={context.login}
            readOnly
            style={{ display: "none" }}
          />
          <input
            type="password"
            name="password"
            value={context.login}
            readOnly
            style={{ display: "none" }}
          />

          <div>
            <Link to="../"> WRÓĆ</Link>
            <button style={{ color: "red" }}>USUŃ</button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
}
