import React, { useState } from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Button from "../components/button"
import Spacer from "../components/spacer"
import Aside from "../components/aside"
import BulletList from '../components/bulletList'
import { Heading, Subheading } from "../components/headings";
import Footer from "../components/footer";

const Tab = styled.button`
width: 200px;
position: relative;
display: inline-block;
padding: 15px 15px 15px;
border: 1px solid rgba(0, 0, 0, 0.2);;
border-bottom: 0;
cursor: pointer;
font-weight: 400;
background: ${({ theme, active }) => active ? theme.pink : 'white'};

:focus {
	outline: none;
}

@media (max-width: 963px) {
	width: 150px;
}

@media (max-width: 768px) {
	width: 33%;
	font-size: 0.8em;
}
`

const TabBody = styled.section`
background: ${({ theme }) => theme.pink};
display: flex;
flex-direction: column;
align-items: stretch;
min-height: 100vh;
padding: 50px;

@media (max-width: 768px) {
	padding: 20px ;
}
`

const LegContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
	flex-direction: column;
}
`
const LegTitle = styled(Heading)`
@media (max-width: 768px) {
	align-self: center;
}
`

const LegText = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 10;
`

const LegBio = styled.p``

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex-basis: auto;
  margin-right: 20px;

  @media (max-width: 768px) {
	align-self: center;
	margin-right: 0;
	margin-bottom: 20px;
}
`

const TopImage = styled.img`
  height: 200px;
`

const Content = ({ tab }) => {
	if (tab === 0) {
		return <>
			<TabBody>
				<SectionLeft>
					<Aside>
						For 2021 we are taking the pilgrimage online with services, reflections, socials and daily activities throughout holy week
				</Aside>
					<Spacer size={50}></Spacer>
					<LegTitle>Virtual Leg</LegTitle>
					<Spacer size={20}></Spacer>
					<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</LegBio>
					<Spacer size={20}></Spacer>
					<BulletList>
						<li>Activity 1</li>
						<li>Activity 2</li>
						<li>Activity 3</li>
						<li>Activity 4</li>
					</BulletList>
					<Button>Sign up now</Button>
				</SectionLeft>

			</TabBody>
		</>
	}
	if (tab === 1) {
		return <>
			<TabBody>
				<SectionLeft>
					<Aside>
						We have 7 routes, or legs, for adults, each with its own character and flavour. Choose the leg that appeals to you or sign up for any leg and we'll place you on one.
				</Aside>
					<Button>Sign up for any leg</Button>
				</SectionLeft>
				<Spacer size={50}></Spacer>
				<SectionLeft width={90}>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/midland_square.jpg" alt="smiling pilgrims in a field" />
						</ImageContainer>
						<LegText>
							<LegTitle>Midland</LegTitle>
							<Subheading><p>Days: 7</p><p>Starting from: Leicester</p><p>Length: 130 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Midland is one of the more relaxed routes. The days are slightly shorter and the cross we carry is lighter although we still sleep in church halls on airbeds. On Midland the liturgy is Catholic including mass most days and an afternoon saying the rosary. We are one of the most sociable groups, having dinner with the parishes we pass through on two nights, and our Wednesday night party with Northern is legendary.</LegBio>
							<Button>Sign up for Midland</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/london-square.jpg" alt="a woman carrying a cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>London</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 130 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/essex-square.jpg" alt="smiling pilgrims crossing a ford" />
						</ImageContainer>
						<LegText>
							<LegTitle>Essex</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 130 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/northern-square.jpg" alt="people playing string instruments" />
						</ImageContainer>
						<LegText>
							<LegTitle>Northern</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 130 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/oxford-square.jpg" alt="a wooden cross bathed in light" />
						</ImageContainer>
						<LegText>
							<LegTitle>Oxford</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 130 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/ely-square.jpg" alt="group picture of pilgrims in front of a wooden cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>Ely</LegTitle>
							<Subheading><p>Days: 3</p><p>Length: 130 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/easter-square.jpg" alt="children carrying a cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>Easter</LegTitle>
							<Subheading><p>Days: 1</p><p>Length: 130 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
				</SectionLeft>
			</TabBody>
		</>
	}
	if (tab === 2) {
		return <>
			<TabBody>
				<SectionLeft>
					<Aside>
						We have 4 routes, or legs, for families with children of different ages. Choose the leg that fits your family.
				</Aside>
				</SectionLeft>
				<Spacer size={50}></Spacer>
				<SectionLeft width={90}>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/peg-square.jpg" alt="man wearing a hat with a cross pinned to it" />
						</ImageContainer>
						<LegText>
							<LegTitle>Peg</LegTitle>
							<Subheading><p>Days: 5</p><p>Age: all ages but primarily primary school</p> Cost: £305 (adults, children aged 14 and over),
							£133 (children aged 3-13)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/wells-square.jpg" alt="children carrying a cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>Wells</LegTitle>
							<Subheading><p>Days: 5</p><p>Age: all ages but primarily primary school</p> Cost: £290 (adults,£130 (children aged 3+)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/wensum-square.jpg" alt="a group of teenagers smiling" />
						</ImageContainer>
						<LegText>
							<LegTitle>Wensum</LegTitle>
							<Subheading><p>Days: 5</p><p>Age: secondary school</p> Cost: £150 (adults), £75 (children aged 12+)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/easter-square.jpg" alt="children carrying a cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>Easter</LegTitle>
							<Subheading><p>Days: 1</p><p>Age: all ages but particularly suitable for those with babies</p> Cost: £65 (adults), £35 (children)</Subheading>
							<LegBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LegBio>
							<Button>Sign up now</Button>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
				</SectionLeft>
			</TabBody>
		</>
	}
}



export default function Home() {
	const [tab, setTab] = useState(0);
	return <PageBase>
		<PageContainer>
			<Header content={'The twelve routes to Walsingham'} src={'legs-square.jpg'} alt={'pilgrims crossing a field'}></Header>
			<div>
				<Tab onClick={() => setTab(0)} active={tab === 0}>Virtual for 2021</Tab>
				<Tab onClick={() => setTab(1)} active={tab === 1}>For Adults</Tab>
				<Tab onClick={() => setTab(2)} active={tab === 2}>For Families</Tab>
			</div>
			<Content tab={tab}></Content>
			<Footer></Footer>
		</PageContainer>
	</PageBase>
}
