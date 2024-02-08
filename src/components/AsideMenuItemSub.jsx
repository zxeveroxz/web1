
function AsideMenuItemSub({active, link, etiqueta, badge}) {
    const activo = active?'active':'';
  return (
    <li className={`menu-item ${activo} `}  >
        <a href={link} className="menu-link">
            <div >{etiqueta}</div>
            {badge && <div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">{badge}</div>}
        </a>
    </li>
  )
}

export default AsideMenuItemSub