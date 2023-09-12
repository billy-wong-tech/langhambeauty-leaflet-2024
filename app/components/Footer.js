import Block from '@/components/Common/Element/Block'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 100%;
`

const Footer = () => {
  return (
    <Block pb="10px" width="100%">
      <Block>
        <Block mx="auto" width="150px"><StyledImg src="/assets/png/logo.png" alt="" /></Block>
      </Block>
      <Block display="flex" justifyContent="center" pt="20px">
        <Block><Block height="18px"><a href="https://www.facebook.com/langhambeauty" target="_blank"><img src="/assets/png/fb.png" alt="" height="100%" width="auto" /></a></Block></Block>
        <Block><Block height="18px"><a href="https://www.instagram.com/langhambeauty" target="_blank"><img src="/assets/png/ig.png" alt="" height="100%" width="auto" /></a></Block></Block>
        <Block><Block height="18px"><a href="https://www.xiaohongshu.com/user/profile/61f40a8d0000000010004da2?xhsshare=CopyLink&appuid=5b555749e8ac2b73aad87627&apptime=1694528048" target="_blank"><img src="/assets/png/book.png" alt="" height="100%" width="auto" /></a></Block></Block>
        <Block><Block height="18px"><img src="/assets/png/search.png" alt="" height="100%" width="auto" /></Block></Block>
      </Block>
      <Block pt="20px">
        <Block mx="auto" width="80%"><StyledImg src="/assets/png/rule.png" alt="" /></Block>
      </Block>
    </Block>
  )
}

export default Footer