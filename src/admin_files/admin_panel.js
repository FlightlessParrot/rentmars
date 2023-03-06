
import { NavLink, Link, Outlet, useOutletContext, useNavigate } from "react-router-dom"

export default function AdminPanel()
{
    
    const context=useOutletContext()
    console.log(context)
    
    return(
        <>
        <nav id='admin-nav'> 
        <NavLink to='./addproduct'>Dodaj Produkt </NavLink>
        <NavLink to='./edit'>Edytuj Produkt</NavLink>
        <NavLink to='./delete'>Usuń Produkt</NavLink>
        <Link to='/'>Wyloguj</Link>
        </nav>
        <Outlet context={context}/>
        </>
    )
}