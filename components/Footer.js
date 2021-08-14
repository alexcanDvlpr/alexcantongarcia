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
            </div>
            <div className="developedBy">
                Created with ❤️ by <b>Alexcan.Dvlpr</b>
            </div>
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 45px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    padding: 5px 30px;
                }
                footer .footer-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    font-size: 1.2rem;
                    margin-bottom: 5px;
                }
                footer .footer-wrapper .rss-content {
                    width: 25%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
                footer .footer-wrapper a {
                    padding: 0px 15px;
                }
                footer .developedBy {
                    width: 100%;
                    margin: 10px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;
                }
            `}</style>
        </footer>
    )
}

export default Footer