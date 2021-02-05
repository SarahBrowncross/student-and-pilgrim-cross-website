import React from "react";
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"

const PageContainer = styled.main`
display: flex;
flex-direction: column;
align-items: stretch;
min-height: 100vh;
`
const Spacer = styled.div`
  height: ${(props) => props.size}px;
`
const SectionWhite = styled.section`
  display: flex;
  padding: 0px 50px;
  justify-content: space-between;
`

const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => props.width ?? 50}%;
  align-self: flex-start;
`
const LegTitle = styled.h2`
font-family: 'Expletus Sans', cursive;
font-size: 2em;
`
const LegBio = styled.p`
font-weight: 300;
  font-size: 1.1em;
  line-height: 1.6em;
  margin: 10px 0px;
`
const BulletList = styled.ul`
  font-weight: 350;
  font-size: 1em;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 50px;

  & li::before {
    content: "\\2022";  
    color: #DC182C;
    font-weight: bold;
    display: inline-block; 
    width: 1em; 
    margin-left: -1em; 
  }
  & b{
    font-weight: 500;
  }
`

export default function SCA() {
	return <Layout>
		<PageContainer>
			<Header background={'#F8F4F2'} content={'Financial support to join the pilgrimage'}></Header>

			<Spacer size={50}></Spacer>

			<SectionWhite>
				<SectionLeft width={70}>
					<LegTitle>Bursaries Available</LegTitle>
					<LegBio>
						Generous financial help is available to anyone who needs it to walk Student and Pilgrim Cross through the SCA, our own registered charity. The SCA can subsidise the cost of the pilgrimage and any equipment you might need to walk, such as a sleeping bag or sturdy shoes. To apply for a bursury tick the box asking for SCA support when booking online for Student and Pilgrim Cross and you’ll be contacted by the leader of your preferred route for further details. They'll do the rest.
				</LegBio>
					<LegBio>
						If your financial circumstances change after booking and you need help, you can still ask your leg leader about a bursary at any time before or during the pilgrimage.
						</LegBio>

					<Spacer size={50}></Spacer>

					<LegTitle>The SCA</LegTitle>
					<LegBio>
						The Student Cross Association (SCA) is a registered charity (charity number 1019313) which exists to raise and disburse funds to needy pilgrims to enable them to walk Student and Pilgrim Cross.
				</LegBio>
					<LegBio>
						The SCA provides two types of grants for needy pilgrims walking Student and Pilgrim Cross:
						</LegBio>
					<BulletList>
						<li>
							<b>Fixed grants:</b> These are given annually to help unwaged or low waged pilgrims. The amount given is determined each year by the SCA based on available funds and acts as a subsidy to the full cost of the walk for unwaged/low waged pilgrims*. The SCA also gives grants to families who need financial help to take part in a family leg of Student and Pilgrim Cross. All grants are made on behalf of qualifying pilgrims directly to their leg, allowing the leg to charge lower fees for unwaged and low-waged pilgrims.
							</li>
						<li>
							<b>Direct bursaries:</b> Individual pilgrims can apply (via their leg leader) for this extra bursary. It can help with things like travel costs to and from Student and Pilgrim Cross pilgrimages, meeting the cost of necessary equipment such as sleeping bags or waterproofs, or in special cases, meeting the total cost of the walk for students or unwaged pilgrims. If accepted, the bursary will be made on the individual pilgrim's behalf to their leg.
						</li>
					</BulletList>
					<Spacer size={50}></Spacer>
				</SectionLeft>
			</SectionWhite>

		</PageContainer>
	</Layout >
}