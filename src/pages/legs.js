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
import Link from "../components/link";
import ImageContainer from "../components/imageContainer"

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

@media (max-width: 568px) {
	padding: 10px 5px 10px;
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


const VirtualImageContainer = styled(ImageContainer)`
align-self: center;
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
						We have 7 routes, or legs, for adults, each with its own character and flavour. Choose the leg that appeals to you or sign up for any leg and we'll place you on one.<br /><br />
						<b>Booking will open in December 2021</b>
					</Aside>
					{/* <Button href="https://docs.google.com/forms/d/e/1FAIpQLSe-inT8C5JXlI3HaByn1Phi7xhj1Q6XE9z_968u4cNbVvQeGw/viewform">Sign up now</Button> */}
				</SectionLeft>
				<Spacer size={50}></Spacer>
				<SectionLeft width={90}>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/midland_square.jpg" alt="smiling pilgrims in a field" />
						</ImageContainer>
						<LegText>
							<LegTitle>Midland</LegTitle>
							<Subheading><p>Days: 7</p><p>Starting from: Leicester</p><p>Length: 120 miles</p> Cost: £150 (waged)/£70 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Midland is one of the more relaxed routes. The days are slightly shorter and the cross we carry is lighter although we still sleep in church halls on airbeds. On Midland the liturgy is Catholic including mass most days and an afternoon saying the rosary. We are one of the most sociable groups, having dinner with the parishes we pass through on two nights, and our Wednesday night party with Northern is legendary.</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/london-square.jpg" alt="a woman carrying a cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>London</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 120 miles</p> Cost: £190 (waged)/£100 (low waged)/£60 (unwaged)</Subheading>
							<LegBio>Mostly off-road, London’s walk will take you across flat country, beside rivers and alongside main roads.
								Accommodation through the week varies. Often called the most luxurious walk (albeit still a challenge),
								London offers you a shower, a night in real beds and lots of cake! Accompanied by a Catholic chaplain, our route is a great mix of Catholic, Anglican and Methodist. A musical bunch, our songs reflect the typical London Pride with many witty ditties both sacred and profane.
							</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/essex-square.jpg" alt="smiling pilgrims crossing a ford" />
						</ImageContainer>
						<LegText>
							<LegTitle>Essex</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 120 miles</p> Cost: £145 (waged)/£100 (low waged)/£55 (unwaged)</Subheading>
							<LegBio>Essex is the most coastal route, taking in the sights of sea, sand, an ice cream stop, two ferries and a bus. One of the more diverse and ecumenical groups – our current walkers include Catholics, Anglicans and Methodists which provides for a more diverse and open liturgy style. Though our nights are the usual airbeds in halls, we do have two opportunities for showers midweek. Every day finishes with a delicious hot evening meal prepared by local parishioners, and we do very well for cooked breakfasts too!

							</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/northern-square.jpg" alt="people playing string instruments" />
						</ImageContainer>
						<LegText>
							<LegTitle>Northern</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 120 miles</p> Cost: £190 (waged)/£100 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Walking mostly on quiet country roads, Northern spend their time on the road talking to each other, with conversation topics ranging from the substantial and serious to the sublimely silly. We welcome people from a range of different church traditions, and those who are open to and exploring questions of faith. We mostly sleep on church hall floors so a sleeping bag and floor mat are essential. We spend many of our evenings in pubs, and often sing and play music together. We even boast a set of kazoos!
							</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/oxford-square.jpg" alt="a wooden cross bathed in light" />
						</ImageContainer>
						<LegText>
							<LegTitle>Oxford</LegTitle>
							<Subheading><p>Days: 7</p><p>Length: 120 miles</p> Cost: £150 (waged)/£80 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>The Oxford route is a bit like our journey with Christ - it may not be the most direct, but you get there in the end. We are quite traditional; sharing services with parishioners, praying the rosary together and opportunities for personal reflection. Just one night of our week we spend with parishioners, the rest of it is just us. We pray, cook, eat, sleep and laugh together!
							</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/ely-square.jpg" alt="group picture of pilgrims in front of a wooden cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>Ely</LegTitle>
							<Subheading><p>Days: 3</p><p>Length: 60 miles</p> Cost: £150 (waged)/£75 (low waged)/£50 (unwaged)</Subheading>
							<LegBio>Ely has a shorter route than most, making it ideal for those unable to walk for the whole week. Meeting on the Tuesday before Easter, we walk for three days; one day off-road and two days on. Started by an Anglican and a Catholic, we have always had quite an ecumencial and open feeling to our group. Ely enjoys not only the widest age range of walkers, but also arguably the most diverse.
							</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/easter-square.jpg" alt="children carrying a cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>Easter</LegTitle>
							<Subheading><p>Days: 1</p><p>Length: 12 miles</p> Cost: £65 (waged)/£35 (low or unwaged)</Subheading>
							<LegBio>Easter meet up in Walsingham on Thursday evening to celebrate Mass of the Last Supper, and walk the 12miles from Wells to Walsingham the next day. The small amount of time together does not stop us from forming great friendships, having a good sing song and time for group reflection. Walkers on Easter arrange their own accommodation and travel. The fee goes towards the cost of two main meals, the Chaplain, the GOD fund and other general expenses. This group is for everyone, from those with young children or limited mobility to work commitments, all are welcome!
							</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
				</SectionLeft>
			</TabBody>
		</>
	}
	if (tab === 1) {
		return <>
			<TabBody>
				<SectionLeft>
					<Aside>
						We have 4 routes, or legs, for families with children of different ages. Choose the leg that fits your family.<br /><br />
						<b>Booking will open in December 2021</b>
					</Aside>
					{/* <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdkBSF9bwryZK2zlPTlqXITCUfrjUnhNvwzAGwPmcLG_HoFiA/viewform">Sign up now</Button> */}
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
							<LegBio>The oldest family leg, Peg contains all the elements of a pilgrimage with a twist. Our cross, walking distance, accommodation and liturgy is more aimed at our younger members. We spend our time doing a range of activities including crafts, egg rolling, making an Easter garden, and other child friendly activities such as swimming and go-karting (over 10’s only). Our group is mostly made up of previous Pilgrim Cross walkers who now bring their own children along, but for others Peg Leg has been their first experience of Pilgrim Cross.
							</LegBio>
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
							<LegBio>A family pilgrimage based in Wells-next-the-Sea, we walk every day covering distances suitable for young children and three-wheel buggies. The rest of our days are filled with other activities including craft, the beach, swimming, the steam train, and Easter activities with the local Parish over the road. Our liturgy caters for everyone in your family: adult, baby, child or teenager. We enjoy many things you may expect from walking other parts of Pilgrim Cross. These included, but are not limited to: the beach, local countryside, cake, beer, cheese and whisky.
							</LegBio>
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
							<LegBio>The next step up. Though Wensum may be aimed at children of secondary school age and their parents/guardians, we are not to be underestimated. Walking 8-12 miles a day, our route is a mixture of quiet roads and muddy footpaths. Our pilgrimage looks pretty much like everyone else's, with the typical: walking, cross carrying, liturgy, music, humour, discussion, camaraderie, church hall floors and most importantly cake. From pilgrims well-versed in the pilgrimage and their children, to new families who want to join the community, Wensum welcomes all!
							</LegBio>
						</LegText>
					</LegContainer>
					<Spacer size={30}></Spacer>
					<LegContainer>
						<ImageContainer>
							<TopImage src="/easter-square.jpg" alt="children carrying a cross" />
						</ImageContainer>
						<LegText>
							<LegTitle>Easter</LegTitle>
							<Subheading><p>Days: 1</p><p>Age: all ages but particularly suitable for those with babies</p> Cost: £65 (adults), £35 (children over 5)</Subheading>
							<LegBio>Easter meet up in Walsingham on Thursday evening to celebrate Mass of the Last Supper, and walk the 12miles from Wells to Walsingham the next day. The small amount of time together does not stop us from forming great friendships, having a good sing song and time for group reflection. Walkers on Easter arrange their own accommodation and travel. The fee goes towards the cost of two main meals, the Chaplain, the GOD fund and other general expenses. This group is for everyone, from those with young children or limited mobility to work commitments, all are welcome!
							</LegBio>
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
				<SectionLeft width={70}>
					<Aside>
						Following the success of our virtual pilgrimage in 2020 and 2021, we are now offering a permanent vitual group.<br /><br />
						<b>Booking will open in December 2021</b>
					</Aside>
					<Spacer size={50}></Spacer>
					<VirtualImageContainer>
						<TopImage src="/virtual-square.jpg" alt="people holding up candles on a video call" />
					</VirtualImageContainer>
					<Spacer size={30}></Spacer>
					<LegTitle>Virtual pilgrimage</LegTitle>
					<Subheading><p>Days: 7</p><p>Starting from: Your living room</p><p>Length: 0 miles</p> Cost: TBC</Subheading>
					<LegBio>Plans for our 2022 virtual pilgrimage are still being developed so watch this space! It will most likely include daily liturgy, a programme of reflections and study, social time and, hopefully, for the Easter weekend, virtual access to our services in Walsingham.</LegBio>
					{/* <Button href="https://docs.google.com/forms/d/e/1FAIpQLSe-inT8C5JXlI3HaByn1Phi7xhj1Q6XE9z_968u4cNbVvQeGw/viewform">Sign up as an adult</Button>
					<Button href="https://docs.google.com/forms/d/e/1FAIpQLSdkBSF9bwryZK2zlPTlqXITCUfrjUnhNvwzAGwPmcLG_HoFiA/viewform">Sign up as a family</Button> */}
				</SectionLeft>

			</TabBody>
		</>
	}
}



export default function Home() {
	const [tab, setTab] = useState(0);
	return <PageBase title="routes">
		<PageContainer>
			<Header content={'The routes to Walsingham'} src={'/legs-square.jpg'} alt={'pilgrims crossing a field'}></Header>
			<div>
				<Tab onClick={() => setTab(0)} active={tab === 0}>For Adults</Tab>
				<Tab onClick={() => setTab(1)} active={tab === 1}>For Families</Tab>
				<Tab onClick={() => setTab(2)} active={tab === 2}>Virtual</Tab>
			</div>
			<Content tab={tab}></Content>
			<Footer></Footer>
		</PageContainer>
	</PageBase>
}
