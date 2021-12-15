import AlexCantonHead from '../components/AlexCantonHead'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, Heading, Text, SimpleGrid, Box } from '@chakra-ui/react'

const AffiliatePage = () => {
  const products = [
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09KH27TYN&linkId=42063e92eb24979cfa0e28877731f3d9"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07XK8KZWK&linkId=058d1b66d5759840e163f6e76a8957b5"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08TDB8C2J&linkId=d90be0996286182d973f51dbb450a36a"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07C8XTKM4&linkId=44fde564e69c2e28bab47306ff13c120"></iframe>',
    '<iframe style="width:100%;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=8413417880&linkId=db266c40d4d1908e4dc943ebd6503e63"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=8413417872&linkId=ff802010c94888bbccac3d158218bc56"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=8413417864&linkId=d52b4ce4cbea1076819dd340a67e9469"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B095HWPYNB&linkId=bec51e9eacb8cf19d09167cdcf3f5175"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B093149QN9&linkId=29841c70ac1c86b68c6f62a471076fc5"></iframe>',
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=alexcandvlprb-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07QCQB51D&linkId=89a757b9ad5a31082a826f69b1392e76"></iframe>'
  ]

  const metadata = { title: 'Página Afiliación | Alex Cantón', index: false, slug: 'afiliados' }
  return (
        <>
            <AlexCantonHead metadata={metadata} />
            <div className="main">
                <Header showTitle={true} />
                <Container className="affiliates__section" as="section" maxW="container.lg" >
                    <div className="affiliates__content">
                        <Heading size="xl">Bienvenidos a la página de Afiliación</Heading>
                        <Text mt={2} fontSize="lg">
                            En esta sección, tendremos los distintos productos de Amazon que he comprado y os recomiendo a todos vosotros.
                        </Text>
                        <SimpleGrid mt={4} columns={{ sm: 2, md: 2, lg: 4, xl: 6 }} spacing={10}>
                            {
                                products && products.map(product => (
                                    <Box key={product} dangerouslySetInnerHTML={{ __html: product }} />
                                ))
                            }
                        </SimpleGrid>
                    </div>
                </Container>
            </div >
            <Footer />
        </>
  )
}

export default AffiliatePage
