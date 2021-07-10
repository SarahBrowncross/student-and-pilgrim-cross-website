import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import Aside from "../components/aside"
import { Heading, Subheading } from "../components/headings";
import Footer from "../components/footer";
import Button from "../components/button";
import ImageContainer from "../components/imageContainer";


const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
}
`

const TimelineImageContainer = styled(ImageContainer)`
	 @media (max-width: 768px) {
		width: 150px;
		height: 150px;
		margin-right: 10px;
	 }
`

const TimelineImage = styled.img`
  height: 200px;
  @media (max-width: 768px) {
	height: 150px;
}
`

const TimelineText = styled.p`
	font-size: 1.2em;
  	line-height: 1.6em;
	font-weight: 350;
	@media (max-width: 768px) {
		font-size: 1em;
  		line-height: 1.2em;
}
`

const TimelineTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 10;
`

const Timeline = styled.div`
	position: relative;
	:before {
		border-left: 6px dashed #737373;
		content: '';
		height: 100%;
		position: absolute;
		left: 150px;
		z-index: 0;
	}
	& ${TimelineImageContainer} {
		z-index: 1;
	}
	@media (max-width: 768px) {
		:before {
			left: 83px;
		}
}

`

function TimelineItem({ pink, imageBoarder, src, year, text }) {
	return <Row pink={pink}>
		<SectionLeft width={80}>
			<TimelineContainer>
				<TimelineImageContainer style={imageBoarder}>
					<TimelineImage src={src} alt="" />
				</TimelineImageContainer>
				<TimelineTextContainer>
					<Heading>{year}</Heading>
					<TimelineText>{text}</TimelineText>
				</TimelineTextContainer>
			</TimelineContainer>
		</SectionLeft>
	</Row>
}

export default function History() {
	return <PageBase title="history">
		<PageContainer>
			<Header pink content={'Our History'} src={'/history-square.jpg'} alt={'pilgrims walking through a crowd'}></Header>
			<Spacer size={30}></Spacer>
			<Row>
				<SectionLeft width={70}>
					<Aside>
						<p>Pilgrim Cross began as Student Cross in 1948 when Wilfred Maundcote-Carter organised a 'Cross Carrying Pilgrimage of Penance and Prayer'. 30 male Catholic students and chaplains took part, walking from London to Walsingham during Holy Week. They had such a great time that at the end of the week they turned to each other and said 'shall we do it again next year?'</p><br />

						<p>The next year it was so popular a second group had to be created, walking from Nottingham instead of London with the two groups meeting in Walsingham. These two routes are still in existence today as London and Northern!</p><br />

						<p>The pilgrimage has continued to grow ever since with 7 current adult walking routes and 3 family routes.  Our demographic has diversified from those original young Catholic men who could carry the cross and their packs for the week. First women were admitted, then we began to welcome pilgrims from across the Christian traditions. After a while the students grew up and had children, now you can find pilgrims of all ages. In 2021 we changed our name to Pilgrim Cross to recognise the diverse community we had become. Today Pilgrim Cross is made up of around 300 pilgrims from diverse backgrounds and faith traditions, ranging from babies to those in their 80s. Even now, when we get to the end of each year, we still turn to each other and say 'shall we do it again?'. Come and join us next year!</p>


					</Aside>
					<Spacer size={50}></Spacer>
				</SectionLeft>
			</Row>

			<Timeline>
				<TimelineItem pink src="/SX-firstyear.jpg" year="1948" text="Pilgrim Cross is founded as Student Cross" />
				<TimelineItem src="/SX-vintage-8-square.jpg" year="1949" text="The pilgrimage's popularity means a second route, Northern, is added" />
				<TimelineItem pink src="/SX-vintage-6.jpg" year="1967" text="Women officially join the pilgrimage for the first time after first walking in 1964" />
				<TimelineItem src="/SX-vintage-5.jpg" year="1972" text="The pilgrimage starts to welcome pilgrims from across the Christian traditions" />
				<TimelineItem pink src="/SX-vintage-4.jpg" year="1981" text="Families start to join the pilgrimage as Family Cross - then a separate pilgrimage" />
				<TimelineItem src="/peg-origin.jpg" year="1992" text="Peg leg, the first permanent family leg, is founded" />
				<TimelineItem pink src="/Frank.jpg" year="2008" text="60th jubilee is marked with a reflection from original pilgrim Frank and a weekend of celebrations" />
				<TimelineItem src="/wensum-square.jpg" year="2012" text="With the founding of Wensum, teenagers have a bespoke pilgrimage experience for the first time" />
				<TimelineItem pink src="/virtual-square.jpg" year="2020" text="The pilgrimage goes virtual in response to the COVID-19 pandemic" />
				<TimelineItem imageBoarder={{ border: '1px solid grey' }} src="/logo.jpg" year="2021" text="Student Cross changes name to Pilgrim Cross to reflect the diverse community we have become" />
			</Timeline>

			<Footer></Footer>
		</PageContainer>
	</PageBase>
}
