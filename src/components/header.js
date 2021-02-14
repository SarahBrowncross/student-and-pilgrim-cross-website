import React from "react"
import styled from "styled-components"
import { SectionLeft, SectionRight, Row } from "./layout"

const HeaderSectionLeft = styled(SectionLeft)`
  width: 75%;

  @media (max-width: 768px) {
  width: 100%;
  }
`

const HeaderSectionRight = styled(SectionRight)`
  @media (max-width: 768px) {
  padding: 0;
  }
`
const HeaderRow = styled(Row)`
@media (max-width: 768px){
    flex-direction: column-reverse;
    padding: 0px;
  }
`
const RowClipContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 250px;
  margin-bottom: -250px;
`;


const ImageContainer = styled.div`
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({ theme }) => theme.red};
  z-index: 3;

  @media (max-width: 1040px) {
    width: 350px;
    height: 350px;
}
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    position: initial;
    height: 300px;
}
`

const MainHeader = styled.h1` 
  font-family: 'Expletus Sans', cursive;
  font-size: 2em;
  line-height: 1em;
  margin-bottom: 0.8em;
  font-weight: 400;

  @media (max-width: 768px) {
  padding: 15px;
  margin-bottom: 0;
  }
`

const Tagline = styled.h2`
  font-size: 1.6em;
  line-height: 1.2em;
  color: rgba(0, 0, 0, 0.8);
`

export default function Header({ pink, content, src, alt }) {
  return (
    <RowClipContainer>
      <HeaderRow pink={pink}>
        <HeaderSectionLeft>
          <MainHeader>{content}</MainHeader>
          <Tagline></Tagline>
        </HeaderSectionLeft>
        <HeaderSectionRight>
          <ImageContainer src={src} />
        </HeaderSectionRight>
      </HeaderRow>


    </RowClipContainer>
  )
}