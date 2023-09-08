import Block from '@/components/Common/Element/Block'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 100%;
`
const Home = () => {
  return (
    <Block width="inherit" minHeight="inherit" backgroundImage="url('/assets/png/bg.png')" backgroundSize="cover" backgroundPosition="center" position="relative">
      <Block width={{ _: '100%', md: '600px' }} mx="auto" position="relative">
        <Block>
          <Block pt="30px">
            <Block mx="auto" width="240px"><StyledImg src="/assets/png/visual.png" alt="" /></Block>
          </Block>
          <Block pt="10px">
            <Block mx="auto" width="120px"><StyledImg src="/assets/png/addr.png" alt="" /></Block>
          </Block>
          <Block width="100%" pt="30px">
            <Menu />
          </Block>
        </Block>

        <Block width="100%" pt="40px">
          <Footer />
        </Block>

        <Block position="absolute" right="10px" bottom="100px">
          <Block mx="auto" width="120px">
            <a href="https://estore.langhambeauty.com/" target="_blank">
              <StyledImg src="/assets/png/eleaflet-15.png" alt="" />
            </a>
          </Block>
        </Block>
      </Block>
    </Block>
  )
}

export default Home