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
          <Block>
            <Block mx="auto" width="100%"><StyledImg src="/assets/png/visual.png" alt="" /></Block>
          </Block>
          <Block width="100%">
            <Menu />
          </Block>
        </Block>

        <Block width="100%" pt="30px">
          <Footer />
        </Block>

        <Block position="absolute" right="10px" bottom="40px">
          <Block mx="auto" width="100px">
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