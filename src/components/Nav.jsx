import BuscarNav from "./BuscarNav"
import UserNav from "./UserNav"
import BotonAside from "./botonAside"
export default function Nav() {
    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme border border-1 border-dark rounded-0 "
            id="layout-navbar">
            <BotonAside />
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <BuscarNav />
                <UserNav />
            </div>
        </nav>
    )
}
