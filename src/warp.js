import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Foot from './warp_files/foot'

export default function Warp()
{
    const location=useLocation();
    const redirect=useNavigate()
    const [link, setLink]= useState('/images/loga/nameless_500.png')
    useEffect(()=>{
        if(location.pathname==='/')
        {
            redirect('/main')
        }
        switch(location.pathname){
        case '/shop': setLink('/images/loga/maszyny_rentmars_logo_500.png'); break; 
        case '/rent': setLink('/images/loga/rent.png'); break;
        default: setLink('/images/loga/nameless_500.png'); break;
        }
    },[location.pathname, redirect])


    return(<>
        <nav>
            <div><img src={link} alt='logo firmy'/></div>
            <div className="nav"><NavLink to='/main'>O nas</NavLink>
            <NavLink to='/shop'>Sklep</NavLink>
            <NavLink to='/rent'>Wypożyczalnia</NavLink>
            <NavLink to='/contact'>Kontakt</NavLink></div>
        </nav>
        <Outlet />
        {location.pathname!=='/main' && (<footer>
        <div><img loading="lazy" src='/images/loga/nameless_500.png' alt='logo firmy'/> </div>
        <Foot title={'Dane firmy'} text={['Rentmars Marcin Zieleniewski', 'NIP: 7773128154', 'siedziba: ul. Rogozińska 55', '62-095 Murowana Goślina' ]} />
         <Foot title={'Kontakt'} text={['tel: +48 577 579 484', 'mail: biuro@rentmars.pl', 'adres: ul. Rogozińska 55', '62-095 Murowana Goślina' ]} />
         <Foot title={'Nasza działalność'} text={['Sklep', 'Wypożyczalnia', 'I więcej' ]} />
        </footer>)}</>
    )
}