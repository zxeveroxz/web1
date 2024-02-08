import {  useState } from "react";

function AsideMenuItemtoogle({ children,etiqueta,active }) {    

    const [activado,setActivado]= useState(active);
    const activo = activado?'active open':'';
    return (
        <li 
            className={`menu-item ${activo}`}
            onClick={() => setActivado(!activado)}
        >
            <a href="#" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <div >{etiqueta}</div>

            </a>
            {children && <ul className="menu-sub">
                {children}
            </ul>}
            
        </li>
    )
}

export default AsideMenuItemtoogle

