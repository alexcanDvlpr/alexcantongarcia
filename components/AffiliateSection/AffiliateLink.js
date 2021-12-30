import { ExternalLinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const AffiliateLink = ({ title, link }) => {
  console.log(title, link)

  return (
    <Link href={link}>
      <a className="article-link" target="_blank" rel="noreferrer,nofollow">
        {title} <ExternalLinkIcon mx={2} />
      </a>
    </Link>
  )
}

export default AffiliateLink
