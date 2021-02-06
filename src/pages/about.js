import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import Aside from "../components/aside"
import { Heading, Subheading } from "../components/headings";

const Answer = styled.p`
  display: flex;
  flex-direction: column;
`

export default function About() {
	return <PageBase>
		<PageContainer>
			<Header pink content={'What is it like to walk Student and Pilgrim Cross?'}></Header>
			<Spacer size={30}></Spacer>
			<Row>
				<SectionLeft width={70}>
					<Aside>
						<p>Student and Pilgrim Cross is an Easter pilgrimage for all ages that walks every year to Walsingham - an ancient site of pilgrimage in Norfolk. We live and walk in community for one, three or seven days before spending an amazing weekend celebrating Easter in the ruins of Walsingham Abbey.</p><br />

						<p>The pilgrimage is a way of celebrating Easter like no other and the friendships you make during the week last a lifetime, but what we appreciate most is the opportunity to step out of the busyness of everyday life for a week and just be.</p>
						<br />
						<p>Whether you are looking to deepen your faith, find fellowship with friends or just taking some time to think, we look forward to meeting you on Student and Pilgrim Cross.</p>
					</Aside>
					<Spacer size={50}></Spacer>
				</SectionLeft>
			</Row>
			<Row pink>
				<SectionLeft>
					<Heading>
						Frequently Asked Questions
					</Heading>
					<Subheading>What is the accomodation?</Subheading>
					<Answer></Answer>
					<Spacer size={30}></Spacer>
					<Subheading>What gear do I need?</Subheading>
					<Answer>As long as you've got a waterproof, a sleeping bag, a mat or airbed and some trainers, you'll be alright. No specialist equipment is needed.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>How far is it?</Subheading>
					<Answer>Most groups walk 120 miles. It's easier than you think - there's lots of stops and walking with a group provides a great boost. Your luggage is taken in a car and if it gets too much, so are you.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>Do I need to be really fit?</Subheading>
					<Answer>Many confirmed couch potatoes have completed the walk without much difficulty. However, some preparation can be helpful. As little as two weeks' preparation with simple stretches and exercises would enable you to tackle the week.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>How much does it cost?</Subheading>
					<Answer>Costs vary, though students and the unwaged can expect to pay between £30 and £65. This covers all your food and accommodation for the week. The only other extras you have to find are money for drinks and about £15 for a coach back from Walsingham. Financial support towards the cost of the pilgrimage is available from the Student Cross Association - please ask for further details.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>What if I don't know anyone?</Subheading>
					<Answer>Don't worry, you soon will. Previous walkers are very keen to meet new faces and there will be other people in the same boat as yourself. Many very strong friendships are formed during the week.</Answer>
					<Spacer size={30}></Spacer>
					<Subheading>How do I get home at the end of the pilgrimage?</Subheading>
					<Answer>We organise coaches leaving Walsingham at 3pm on Easter Sunday bound for London and Leicester.</Answer>
					<Spacer size={30}></Spacer>
				</SectionLeft>
			</Row>

		</PageContainer>
	</PageBase>
}
