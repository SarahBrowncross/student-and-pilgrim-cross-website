import React from "react"
import styled from "styled-components"
import Button from "./button"
import { SectionLeft, SectionRight, Row } from "./layout"

const HeaderSectionLeft = styled(SectionLeft)`
  width: 75%;
  max-width: 525px;

  @media (max-width: 768px) {
  width: 100%;
  padding-right: 15px;
  box-sizing: border-box;
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

const ImageContainer = styled.div`
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: -150px;
  right: -150px;
  z-index: 3;
  background-color: ${({ theme }) => theme.red};

  @media (max-width: 1040px) {
    width: 400px;
    height: 400px;
    top: -50px;
  right: -50px;
} 

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    position: initial;
    height: 300px;
} 
`

const RowClipContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 250px;
  margin-bottom: -250px;
`;

const MainHeader = styled.h1`
  font-family: 'Expletus Sans', cursive;
  font-size: 3em;
  line-height: 1em;
  margin-bottom: 0.8em;

  @media (max-width: 768px) {
  padding: 15px;
  margin-bottom: 0;
  }
`

const MainHeaderRed = styled.div`
  color: ${({ theme }) => theme.red};
`

const Tagline = styled.h2`
  font-size: 1.6em;
  line-height: 1.2em;
  color: rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
  padding: 15px;
  margin-bottom: 0;
  line-height: 1.5em;
  }
`

export default function MainPageHeader({ pink, content, src }) {
  return (
    <RowClipContainer>
      <HeaderRow pink={pink}>
        <HeaderSectionLeft>
          <MainHeader>Student <MainHeaderRed>and Pilgrim </MainHeaderRed>Cross</MainHeader>
          <Tagline>{content}</Tagline>
          <Button href='/legs'>Walk with us</Button>
        </HeaderSectionLeft>
        <HeaderSectionRight>
          <ImageContainer src={src} />
        </HeaderSectionRight>
      </HeaderRow>
    </RowClipContainer>
  )
}