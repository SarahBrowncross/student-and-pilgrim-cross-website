import React from "react";
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"

const PageContainer = styled.main`
display: flex;
flex-direction: column;
align-items: stretch;
min-height: 100vh;
max-width: 100vw;
overflow-x: hidden;
`
const LegText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 1em;
  line-height: 1.6em;
`
const LegStats = styled.div`
font-weight: 400;
  font-size: 1.1em;
  line-height: 1.6em;
  margin: 10px 0px;
`
const Aside = styled.aside`
  font-weight: 300;
  font-size: 1em;
  line-height: 1.6em;
  border-left: 6px solid #DC182C;
  padding-left: 25px;

  & b{
    font-weight: 400;
  }
`
const LegTitle = styled.h2`
font-family: 'Expletus Sans', cursive;
font-size: 2em;
`
const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => props.width ?? 50}%;
  align-self: flex-start;
`
const SectionWhite = styled.section`
  display: flex;
  padding: 0px 50px;
  justify-content: space-between;
`
const Spacer = styled.div`
  height: ${(props) => props.size}px;
`
const SectionPink = styled.section`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  background: #F8F4F2;
`

export default function About() {
	return <Layout>
		<PageContainer>
			<Header background={'#F8F4F2'} content={'What is it like to walk Student and Pilgrim Cross?'}></Header>
			<Spacer size={30}></Spacer>
			<SectionWhite>
				<SectionLeft width={70}>
					<Aside>
						<p>Student and Pilgrim Cross is an Easter pilgrimage for all ages that walks every year to Walsingham - an ancient site of pilgrimage in Norfolk. We live and walk in community for one, three or seven days before spending an amazing weekend celebrating Easter in the ruins of Walsingham Abbey.</p><br />

						<p>The pilgrimage is a way of celebrating Easter like no other and the friendships you make during the week last a lifetime, but what we appreciate most is the opportunity to step out of the busyness of everyday life for a week and just be.</p>
						<br />
						<p>Whether you are looking to deepen your faith, find fellowship with friends or just taking some time to think, we look forward to meeting you on Student and Pilgrim Cross.</p>
					</Aside>
					<Spacer size={50}></Spacer>
				</SectionLeft>
			</SectionWhite>
			<SectionPink>
				<SectionLeft>
					<LegTitle>
						Frequently Asked Questions
					</LegTitle>
					<LegStats>What is the accomodation?</LegStats>
					<LegText></LegText>
					<Spacer size={30}></Spacer>
					<LegStats>What gear do I need?</LegStats>
					<LegText>As long as you've got a waterproof, a sleeping bag, a mat or airbed and some trainers, you'll be alright. No specialist equipment is needed.</LegText>
					<Spacer size={30}></Spacer>
					<LegStats>How far is it?</LegStats>
					<LegText>Most groups walk 120 miles. It's easier than you think - there's lots of stops and walking with a group provides a great boost. Your luggage is taken in a car and if it gets too much, so are you.</LegText>
					<Spacer size={30}></Spacer>
					<LegStats>Do I need to be really fit?</LegStats>
					<LegText>Many confirmed couch potatoes have completed the walk without much difficulty. However, some preparation can be helpful. As little as two weeks' preparation with simple stretches and exercises would enable you to tackle the week.</LegText>
					<Spacer size={30}></Spacer>
					<LegStats>How much does it cost?</LegStats>
					<LegText>Costs vary, though students and the unwaged can expect to pay between £30 and £65. This covers all your food and accommodation for the week. The only other extras you have to find are money for drinks and about £15 for a coach back from Walsingham. Financial support towards the cost of the pilgrimage is available from the Student Cross Association - please ask for further details.</LegText>
					<Spacer size={30}></Spacer>
					<LegStats>What if I don't know anyone?</LegStats>
					<LegText>Don't worry, you soon will. Previous walkers are very keen to meet new faces and there will be other people in the same boat as yourself. Many very strong friendships are formed during the week.</LegText>
					<Spacer size={30}></Spacer>
					<LegStats>How do I get home at the end of the pilgrimage?</LegStats>
					<LegText>We organise coaches leaving Walsingham at 3pm on Easter Sunday bound for London and Leicester.</LegText>
					<Spacer size={30}></Spacer>
				</SectionLeft>
			</SectionPink>

		</PageContainer>
	</Layout>
}
