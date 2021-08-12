const { Link } = require("@chakra-ui/react")

const Header = () => {

    const navbarRoutes = [
        { href: '/', name: 'Inicio' },
        { href: '/blog', name: 'Blog' }
    ]

    return (
        <header>
            <nav>
                <ul className="nav-wrapper">
                    <li>
                        {
                            navbarRoutes.map(link => (
                                <Link key={link.name} href={link.href}>
                                    <span className="nav-item-link">{link.name}</span>
                                </Link>
                            ))
                        }
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
                    width: 25%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    padding: 0px 30px;
                }
                .nav-wrapper {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    list-style: none;
                }
                .nav-item-link {
                    padding-left: 45px;
                    font-size: 1.5rem;
                    font-weight: 500;
                }
            `}</style>
        </header>
    )
}

export default Header