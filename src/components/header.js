import React from "react"
import styled from "styled-components"
import Button from "./button"
import { SectionLeft, SectionRight, Row } from "./layout"

const ImageContainer = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: -200px;
  right: -200px;
`

const TopImage = styled.img`
  height: 600px;
  
`

const MainHeader = styled.h1`
  font-family: 'Expletus Sans', cursive;
  font-size: 3em;
  line-height: 1em;
  margin-bottom: 0.8em;
`

const MainHeaderRed = styled.div`
  color: ${({ theme }) => theme.red};
`

const Tagline = styled.h2`
  font-size: 1.6em;
  line-height: 1.2em;
  color: rgba(0, 0, 0, 0.8);
`

export default function Header({ pink, content }) {
  return (
    <>
      <Row pink={pink}>
        <SectionLeft>
          <MainHeader>Student <MainHeaderRed>and Pilgrim </MainHeaderRed>Cross</MainHeader>
          <Tagline>{content}</Tagline>
          <Button>Walk with us</Button>
        </SectionLeft>
        <SectionRight>
          <ImageContainer>
            <TopImage src="/top.jpg" alt="smiling pilgrims crossing a ford" />
          </ImageContainer>
        </SectionRight>
      </Row>


    </>
  )
}