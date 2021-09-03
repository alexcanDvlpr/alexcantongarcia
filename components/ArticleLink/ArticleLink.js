import { Link } from '@chakra-ui/react'

const ArticleLink = (props) => {
  return (
        <Link className="article-link" {...props} target="_blank" rel="noreferrer">
            <a>
                { props.children }
            </a>
        </Link>
  )
}

export default ArticleLink
