import ToggleThemeColorButton from "./ToggleThemeColorButton"

const { Link, Heading } = require("@chakra-ui/react")

const Header = ({ showTitle = false }) => {

    const navbarRoutes = [
        { href: '/', name: 'Inicio' },
        { href: '/blog', name: 'Blog' }
    ]

    return (
        <header>
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
            <style jsx>{`
                header {
                    width: 100%;
                    height: 58px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    padding: 5px 30px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                nav {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    padding: 0px 30px;
                }
                .headerName {
                    width: 25%;
                    height: 100%;
                }
                .nav-wrapper {
                    width: 75%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    list-style: none;
                }
                .nav-item-link {
                    margin-left: 45px;
                    font-size: 1.5rem;
                    font-weight: 500;
                }
                @media only screen and (max-width: 600px) { 
                    nav {
                        flex-direction: column;
                        padding: 0px 10px;
                        justify-content: space-around;
                    }
                    .headerName {
                        margin-top: 20px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }
                    .nav-wrapper {
                        width: 100%;
                        flex-wrap: no-wrap;
                        padding: 0;
                        margin: 0;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header