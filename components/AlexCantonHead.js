import Head from 'next/head'

const AlexCantonHead = ({ index = false, title = 'Alex Cantón' }) => {
  const indexed = (index) ? 'index,follow' : 'noindex,nofollow'
  return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content="Mi nombre es Alex Cantón y soy desarrollador web desde el 2017 en Madrid, España. Esta es mi web junto con mi blog en la que quiero compartir conocimiento, enseñar nuevas tecnologías y enseñar JavaScript desde 0 para gente que este estudiando o se este abriendo camino en el mundo laboral." />
            <meta name="keywords" content="Alex Cantón, Desarrollo, JavaScript" />
            <meta name="author" content="Alex Cantón" />
            <meta name="robots" content={indexed} />
        </Head>
  )
}

module.exports = AlexCantonHead
