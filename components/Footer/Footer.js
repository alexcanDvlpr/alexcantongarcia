import { Link } from "@chakra-ui/react"

const Footer = () => {

    const rss = [
        { link: 'https://twitter.com/AlexcanDvlpr', name: 'Twitter' },
        { link: 'https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa-2a5b7311a/', name: 'Linkedin' },
        { link: 'https://github.com/alexcanDvlpr', name: 'Github' },
    ]

    return (
        <footer>
            <div className="footer-wrapper">
                <div className="rss-content">
                    {
                        rss.map(link => (
                            <Link href={link.link} key={link.name} target="_blank">
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
                <div className="developedBy">
                    Created with ❤️ by <b>Alexcan.Dvlpr</b>
                </div>
            </div>
        </footer>
    )
}

export default Footer