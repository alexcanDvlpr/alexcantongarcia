import ToggleThemeColorButton from '../ToggleTheme/ToggleThemeColorButton'
import { Link, Heading } from '@chakra-ui/react'
import { routes } from '../../data/menu_items'
import { useRouter } from 'next/router'

const Header = () => {
  const { asPath } = useRouter()
  const showTitle = (asPath !== '/')

  const blogHeader = (showTitle) ? 'blogHeader' : ''
  const hasTitle = (showTitle) ? 'hasTitle' : ''

  return (
        <header className={blogHeader}>
            <nav>
                {
                    showTitle &&
                    (
                        <span id="headerName" className="headerName">
                            <Heading as="h1" size="xl">Alex Cantón</Heading>
                        </span>
                    )
                }
                <ul className={`nav-wrapper ${hasTitle}`}>
                    {
                        routes.map(link => (
                            <li key={link.name} className="nav-item-link">
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                    <li className="nav-item-link theme-toggle">
                        <ToggleThemeColorButton />
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default Header
