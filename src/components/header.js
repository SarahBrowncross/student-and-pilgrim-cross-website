import React from "react"
import styled from "styled-components"

const SectionPink = styled.section`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  background: ${(props) => props.background};
  `
const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => props.width ?? 50}%;
  align-self: flex-start;
`

const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`

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
  margin-bottom: 0.8em;
`

const MainHeaderRed = styled.h1`
  color: #DC182C;
`

const Tagline = styled.h2`
  font-weight: 300;
  font-size: 1.6em;
  line-height: 1.2em;
  color: rgba(0, 0, 0, 0.8);
`

const Button = styled.button`
  background-color: #DC182C;
  color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.35);
  border: 0;
  padding: 0.4em 0.8em;
  margin-top: 1em;
  align-self: flex-end;
`

export default function Header(props) {
	return (
		<>
			<SectionPink background={props.background}>
				<SectionLeft>
					<MainHeader>Student <MainHeaderRed>and Pilgrim </MainHeaderRed>Cross</MainHeader>
					<Tagline>{props.content}</Tagline>
					<Button>Walk with us</Button>
				</SectionLeft>
				<SectionRight>
					<ImageContainer>
						<TopImage src="/top.jpg" alt="smiling pilgrims crossing a ford" />
					</ImageContainer>
				</SectionRight>
			</SectionPink >


		</>
	)
}