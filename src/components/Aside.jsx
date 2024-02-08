import AsideLogo from "./AsideLogo";
import AsideMenuItem from "./AsideMenuItem";
import AsideMenuItemSub from "./AsideMenuItemSub";
import AsideMenuItemtoogle from "./AsideMenuItemtoogle";

const Aside = () => {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <AsideLogo />

            <ul className="menu-inner py-1">

                <AsideMenuItemtoogle etiqueta="Dashboards" active>
                    <AsideMenuItemSub link="uno.html" etiqueta="Uno toggle" />
                    <AsideMenuItemSub link="uno.html" etiqueta="Dos" />
                </AsideMenuItemtoogle>

                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Forms &amp; Tables</span>
                </li>

                <AsideMenuItemtoogle etiqueta="Tooglee" active>
                    <AsideMenuItemSub link="uno.html" etiqueta="Uno toggle" />
                    <AsideMenuItemSub link="uno.html" etiqueta="Dos" />
                    <AsideMenuItemSub active link="uno.html" etiqueta="Uno Togle" />
                    <AsideMenuItemSub link="uno.html" etiqueta="Dos" badge="LITE" />
                </AsideMenuItemtoogle>

                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Sistema</span>
                </li>

                <AsideMenuItem active etiqueta="Reportes" badge="nuevo" />

                <AsideMenuItem active etiqueta="Configuraciones" />

            </ul>
        </aside>
    );
}

export default Aside;
