import Block from '@/components/Common/Element/Block'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

function Category(props) {
  const { leaflet } = props
  return (
    <Block backgroundImage="url('/assets/2024/png/bg.png')" backgroundSize="cover" backgroundPosition="center">
      <Block><img src={leaflet} alt="leaflet" width="100%" /></Block>
      <Block width={{ _: '100%', md: '600px' }} mx="auto" position="relative">
        <Block pt="10px">
          <Menu />
        </Block>

        <Block>
          <Footer />
        </Block>
      </Block>
      
      <Block position="fixed" width="40px" top="10px" left="10px">
        <a href="/">
          <img src="/assets/2024/png/back.png" alt="back" width="100%" />
        </a>
      </Block>
    </Block>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { category: '1', } },
    { params: { category: '2' } },
    { params: { category: '3' } },
    { params: { category: '4' } },
    { params: { category: '5' } },
    { params: { category: '6' } },
  ]

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  let leaflet = null
  switch (params?.category) {
    case '1':
      leaflet = '/assets/2024/png/eleaflet-02.jpg'
      break
    case '2':
      leaflet = '/assets/2024/png/eleaflet-03.jpg'
      break
    case '3':
      leaflet = '/assets/2024/png/eleaflet-04.jpg'
      break
    case '4':
      leaflet = '/assets/2024/png/eleaflet-05.jpg'
      break
    case '5':
      leaflet = '/assets/2024/png/eleaflet-06.jpg'
      break
    case '6':
      leaflet = '/assets/2024/png/eleaflet-07.jpg'
      break
    default:
      leaflet = '/assets/2024/png/eleaflet-02.jpg'
  }
  return {
    props: {
      params,
      leaflet,
    },
  }
}

export default Category