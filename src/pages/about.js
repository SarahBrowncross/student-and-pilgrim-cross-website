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
import Link from "../components/link";

const Answer = styled.p`
`

export default function About() {
	return <PageBase title="about">
		<PageContainer>
			<Header pink content={'What is Pilgrim Cross?'} src={'/about-square.jpg'} alt={'pilgrims crossing a bridge'}></Header>
			<Spacer size={30}></Spacer>
			<Row>
				<SectionLeft width={70}>
					<Aside>
						<p>Pilgrim Cross is an Easter pilgrimage for all ages that walks every year to Walsingham - an ancient site of pilgrimage in Norfolk. We live and walk in community for one, three or seven days before spending an amazing weekend celebrating Easter in the ruins of Walsingham Abbey.</p><br />

						<p>The pilgrimage is a way of celebrating Easter like no other and the friendships you make during the week last a lifetime, but what we appreciate most is the opportunity to step out of the busyness of everyday life for a week and just be.</p>
						<br />
						<p>Whether you are looking to deepen your faith, find fellowship with friends or just taking some time to think, we look forward to meeting you on Pilgrim Cross.</p>
					</Aside>
					<Spacer size={50}></Spacer>
				</SectionLeft>
			</Row>
			<Row pink>
				<SectionLeft>
					<Heading>
						Frequently Asked Questions
					</Heading>
					<Subheading>Where will I be sleeping?</Subheading>
					<Answer>Different routes have different types of accomodation. The adult walking legs and Wensum sleep in church halls on airbeds on the floor. The family legs for younger children stay in youth hostels. When we arrive in Walsingham we stay at the Pilgrim Bureau.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>What kind of liturgy do we use?</Subheading>
					<Answer>Each group creates their own liturgy. Pilgrim Cross started out as a Catholic pilgrimage. We are now ecumenical, but different groups lean more towards different faith traditions than others. The services in Walsingham are a mixture of Catholic and Anglican. You can find out more about each groups liturgy on the routes page.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>What gear do I need?</Subheading>
					<Answer>As long as you've got a waterproof, a sleeping bag, a mat or airbed and some trainers, you'll be alright. No specialist equipment is needed.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>How far is it?</Subheading>
					<Answer>The adult legs walk around 15 to 20 miles a day. The family legs walk between 5 and 10 miles a day. It's easier than you think - there's lots of stops and walking with a group provides a great boost. Your luggage is taken in a car and if it gets too much, so are you. <b>In 2022:</b> some legs have chosen to walk shorter days to make it easier to stay covid-safe. You can find out more on the <Link href="/legs">routes page</Link></Answer>
					<Spacer size={30}></Spacer>
					<Subheading>Do I need to be really fit?</Subheading>
					<Answer>Many confirmed couch potatoes have completed the walk without much difficulty. However, some preparation can be helpful. As little as two weeks' preparation with simple stretches and exercises would enable you to tackle the week.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>How much does it cost?</Subheading>
					<Answer>Our costs are income based and range from £30 to £200. This covers all your food and accommodation for the week. The only other extras you have to find are money for drinks and about £20 for a coach back from Walsingham. Financial support towards the cost of the pilgrimage is available.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>What if I don't know anyone?</Subheading>
					<Answer>Don't worry, you soon will. Previous walkers are very keen to meet new faces and there will be other people in the same boat as yourself. Many very strong friendships are formed during the week.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>How do I get home at the end of the pilgrimage?</Subheading>
					<Answer>We organise coaches leaving Walsingham at 3pm on Easter Sunday bound for London and Leicester.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>How did Pilgrim Cross start?</Subheading>
					<Answer>We were founded in 1948 by a group of Catholic students who enjoyed it so much they just kept coming back year after year. You can read more about it <Link href="/history">on our history page</Link></Answer>
					<Spacer size={10}></Spacer>
					<Button href='/legs' >
						Choose a Group
					</Button>
				</SectionLeft>
			</Row>
			<Footer></Footer>
		</PageContainer>
	</PageBase>
}
