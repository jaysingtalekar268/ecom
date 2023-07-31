import navbarStyle from "../../styles/navbar/navbar.module.css"

export default function NavbarComponent() {
    return (
        <div className={navbarStyle.main_div}>
            <ul className={navbarStyle.menu}>
                <li> Home</li>
            </ul>
        </div>
    )
}
