
import { NavLink, Link, Outlet, useOutletContext } from "react-router-dom"

export default function AdminPanel()
{
    
    const context=useOutletContext()
    console.log(context)
    
    return(
        <>
        <nav id='admin-nav'> 
        <NavLink to='/admin/panel/add-product'>Dodaj Produkt </NavLink>
        <NavLink to='/admin/panel/edit-product'>Edytuj lub Usuń Produkt</NavLink>
        
        <Link to='/'>Wyloguj</Link>
        </nav>
        <Outlet context={context}/>
        </>
    )
}