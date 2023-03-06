import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function Login(props) {
  const [login, setLogin] = useState("login");
  const [pass, setPass] = useState("password");
  

  return (
    <div id="login-div">
      <Link to="/">Wróc na stronę główną</Link>
      <Form method="post" onSubmit={() => props.startLoading(true)}>
        <p>{props.response?.message}</p>
        <label htmlFor="login">Login</label>
        <input
          id="login"
          name="login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.currentTarget.value)}
          required
        ></input>
        <label htmlFor="password">Hasło</label>
        <input
          id="password"
          name="password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
          required
        ></input>
        <button type="submit">Zaloguj</button>
      </Form>
    </div>
  );
}
