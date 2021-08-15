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
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 70px;
                    margin-top: 20px;
                }
                footer .footer-wrapper {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.1rem;
                }
                footer .footer-wrapper .rss-content {
                    width: 25%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                }
                footer .developedBy {
                    margin-top: 10px;
                    padding-bottom: 10px;
                }
                @media only screen and (max-width: 600px) {
                    footer .rss-content {
                        width: 100% !important;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        padding: 0px 20px;
                    }
                }
            `}</style>
        </footer>
    )
}

export default Footer