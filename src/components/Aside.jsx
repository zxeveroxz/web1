
const Aside = () => {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        logo
                    </span>
                    <span className="app-brand-text demo menu-text fw-bold ms-2">Membresia</span>
                </a>

                <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>


            <ul className="menu-inner py-1">

                <li className="menu-item">
                    <a href="#" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div >Dashboards</div>
                        <div className="badge bg-danger rounded-pill ms-auto">5</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="#" target="_blank" className="menu-link">
                                <div >CRM</div>
                                <div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="index.html" className="menu-link">
                                <div >Analytics</div>
                            </a>
                        </li>

                    </ul>
                </li>




                <li className="menu-header small text-uppercase"><span className="menu-header-text">Forms &amp; Tables</span></li>

                <li className="menu-item ">
                    <a href="#" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-detail"></i>
                        <div >Form Elements</div>
                        
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="forms-basic-inputs.html" className="menu-link">
                                <div >Basic Inputs</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="forms-input-groups.html" className="menu-link">
                                <div >Input groups</div>
                                
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item active open">
                    <a href="#" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-detail"></i>
                        <div>Form Layouts</div>
                        
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item active">
                            <a href="form-layouts-vertical.html" className="menu-link">
                                <div >Vertical Form</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="form-layouts-horizontal.html" className="menu-link">
                                <div >Horizontal Form</div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="menu-item">
                    <a href="#" target="_blank" className="menu-link ">
                        <i className="menu-icon tf-icons bx bx-list-check"></i>
                        <div>Form Validation</div>
                        <div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                </li>

            </ul>
        </aside>
    );
}

export default Aside;
