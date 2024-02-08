import LiMenuAvatar from "./LiMenuAvatar"
import LiMenuDivisor from "./LiMenuDivisor"
import LiMenuItem from "./LiMenuItem"
import LiMenuItemNumero from "./LiMenuItemNumero"
import LiMenuItemPrincipal from "./LiMenuItemPrincipal"

function LiMenu() {
    return (
        <>
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <LiMenuAvatar/>
                <ul className="dropdown-menu dropdown-menu-end">
                    <LiMenuItemPrincipal/>
                    <LiMenuItemPrincipal/>
                    <LiMenuDivisor />
                    <LiMenuItemNumero />
                    <LiMenuDivisor />
                    <LiMenuItemNumero />
                    <LiMenuDivisor />
                    <LiMenuItem/>
                    <LiMenuDivisor />
                    <LiMenuItem/>
                </ul>
            </li>
        </>
    )
}

export default LiMenu