import ToggleThemeColorButton from "../ToggleTheme/ToggleThemeColorButton"

const { Link, Heading } = require("@chakra-ui/react")

const Header = ({ showTitle = false }) => {

    const navbarRoutes = [
        { href: '/', name: 'Inicio' },
        { href: '/blog', name: 'Blog' }
    ]

    const blogHeader = (showTitle) ? 'blogHeader' : ''

    return (
        <header className={blogHeader}>
            <nav>
                <span className="headerName">
                    {
                        showTitle ?
                            <Heading as="h1" size="lg">Alex Cantón</Heading> :
                            ''
                    }
                </span>
                <ul className="nav-wrapper">
                        {
                            navbarRoutes.map(link => (
                                <li key={link.name} className="nav-item-link">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                        <li className="nav-item-link">
                            <ToggleThemeColorButton />
                        </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header