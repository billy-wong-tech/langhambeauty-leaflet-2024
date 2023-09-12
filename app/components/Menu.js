import Block from '@/components/Common/Element/Block'
import styled from 'styled-components'

const StyledImg = styled.img`
  height: 55px;
  width: auto;
`

const Menu = () => {
  return (
    <Block display="flex" flexDirection="column" alignItems="center" width="100%" mt="-35px">
      <Block><a href="/category/1.html"><StyledImg src='/assets/png/eleaflet-09.png' alt="" /></a></Block>
      <Block><a href="/category/2.html"><StyledImg src='/assets/png/eleaflet-10.png' alt="" /></a></Block>
      <Block><a href="/category/3.html"><StyledImg src='/assets/png/eleaflet-11.png' alt="" /></a></Block>
      <Block><a href="/category/4.html"><StyledImg src='/assets/png/eleaflet-12.png' alt="" /></a></Block>
      <Block><a href="/category/5.html"><StyledImg src='/assets/png/eleaflet-13.png' alt="" /></a></Block>
      <Block><a href="/category/6.html"><StyledImg src='/assets/png/eleaflet-14.png' alt="" /></a></Block>
    </Block>
  )
}

export default Menu