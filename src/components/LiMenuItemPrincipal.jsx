

function LiMenuItemPrincipal() {
    return (
        <li>
            <a className="dropdown-item" href="#">
                <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                            <img src="src/assets/img/avatars/1.png" className="w-px-40 h-auto rounded-circle" />
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <span className="fw-medium d-block">John Doe</span>
                        <small className="text-muted">Admin</small>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default LiMenuItemPrincipal