import { Outlet, useActionData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./universal/loading";
import Login from "./admin_files/login";

export default function Admin() {
  const response = useActionData();
  const [loading, startLoading] = useState(false);
   const [showLogin, setShowLogin] = useState(true)
   const [data, setData]=useState({login: '', password: ''})
  const navigate = useNavigate();
  useEffect(() => {
    startLoading(false);
    if (response?.value) {
      
      setShowLogin(!response.value)
      setData({login: response.login, password: response.password})
      navigate("./panel");
      
    }
  }, [response, startLoading, navigate]);
  
  return (
    <>
      {" "}
      {loading && <Loading />}
      {showLogin && <Login response={response} startLoading={startLoading} />}
      {(data.login!=='' && data.password!=='') &&<Outlet context={data} /> }
    </>
  );
}
