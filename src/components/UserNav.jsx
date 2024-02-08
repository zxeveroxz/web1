import LiMenu from "./LiMenu";

export default function UserNav() {
    return (
        <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item lh-1 me-3">
                <a className="github-button" href="#" data-icon="octicon-star" data-size="large" data-show-count="true"
                >Star :-| </a>
            </li>
            <LiMenu />

        </ul>
    )
}
