import "./Navbar.css"
import Logo from "../../assets/img/logo.png"
// import SmallLogo from "../../assets/img/small-logo.png"

const navigations = [
    { id: 1, name: 'Home', href: '/home', current: true },
    { id: 2, name: 'Bouquet', href: '/bouquet', current: false },
    { id: 3, name: 'Flowerpot', href: '/flower-pot', current: false },
    { id: 4, name: 'Gifts', href: '/gifts', current: false },
]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={ Logo } className="logo-img" alt="Fiore fresco" />
            </div>
            <ul className="header__navbar">
                { navigations.map((navigation) => (
                    <li key={ navigation.id } className={ navigation.current ? "navbar-item navbar-item--active" : "navbar-item" }>
                        <a href={ navigation.href }>{ navigation.name }</a>
                    </li>
                )) }
            </ul>
        </div>
    )
}
