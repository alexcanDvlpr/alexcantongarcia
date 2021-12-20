import Head from 'next/head'

const AlexCantonHead = ({ metadata = { } }) => {
  const SEO = {
    title: metadata.seo_title || 'Alex Cantón',
    description:
      metadata.description || 'Mi nombre es Alex Cantón y soy desarrollador web desde el 2017 en Madrid, España. Esta es mi web junto con mi blog en la que quiero compartir conocimiento, enseñar nuevas tecnologías y enseñar JavaScript desde 0 para gente que este estudiando o se este abriendo camino en el mundo laboral.',
    slug: metadata.slug || '',
    image: 'https://res.cloudinary.com/dnnfr3jhi/image/upload/v1639688292/Blog/Alexcan.Dvlpr_smb0wg.webp',
    date: metadata.date || new Date().toISOString(),
    indexed: (metadata.index) ? 'index,follow' : 'noindex,nofollow'
  }

  return (
    <Head>
      <title>{SEO.title}</title>
      <meta key="description" name="description" content={SEO.description} />
      <meta key="author" name="author" content="Alex Cantón" />
      <meta key="robots" name="robots" content={SEO.indexed} />
      <meta key="og:url" property="og:url"
        content={`https://www.alexcantongarcia.es/${SEO.slug}`} />
      <link key="canon" rel="canonical" href={`https://www.alexcantongarcia.es/${SEO.slug}`} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content="Alex Cantón" />
      <meta key="og:description" property="og:description" content={SEO.description} />
      <meta key="og:title" property="og:title" content={SEO.title} />
      <meta key="og:image" property="og:image" content={SEO.image} />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content="@AlexcanDvlpr" />
      <meta key="twitter:title" name="twitter:title" content={SEO.title} />
      <meta key="twitter:description" name="twitter:description" content={SEO.description} />
      <meta key="twitter:image" name="twitter:image" content={SEO.image} />
      <meta key="published" property="article:published_time" content={SEO.date} />
    </Head>
  )
}

module.exports = AlexCantonHead
