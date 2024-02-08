
function AsideMenuItem({ active, etiqueta, badge }) {
    return (
        <li className="menu-item ">
            <a href="#" target="_blank" className="menu-link  ">
                <i className="menu-icon tf-icons bx bx-list-check"></i>
                <div>{etiqueta}</div>
                {badge &&
                    <div className="badge bg-dark fs-tiny rounded-pill ms-auto">{badge}</div>
                }
            </a>
        </li>
    );
}

export default AsideMenuItem;
