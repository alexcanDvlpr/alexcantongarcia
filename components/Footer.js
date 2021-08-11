import { Link } from "@chakra-ui/react"

const Footer = () => {

    const rss = [
        { link: 'https://twitter.com/ACanton97', name: 'Twitter' },
        { link: 'https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa-2a5b7311a/', name: 'Linkedin' },
        { link: 'https://github.com/alexcanDvlpr', name: 'Github' },
    ]

    return (
        <footer>
            <div className="footer-wrapper">
                {
                    rss.map(link => (
                        <Link href={link.link} key={link.name} passHref={true}>
                            <a target="_blank">{link.name}</a>
                        </Link>
                    ))
                }
            </div>
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 45px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    padding: 5px 30px;
                }
                footer .footer-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    font-size: 1.2rem;
                    margin-bottom: 5px;
                }
                footer .footer-wrapper a {
                    margin: 0px 15px;
                }
            `}</style>
        </footer>
    )
}

export default Footer