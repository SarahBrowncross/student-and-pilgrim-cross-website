import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import BulletList from "../components/bulletList";
import { Heading } from "../components/headings";

const Text = styled.p`
  font-size: 1.1em;
  margin: 10px 0px;
`

export default function SCA() {
	return <PageBase>
		<PageContainer>
			<Header pink content={'Financial support to join the pilgrimage'}></Header>

			<Spacer size={50}></Spacer>

			<Row>
				<SectionLeft width={70}>
					<Heading>Bursaries Available</Heading>
					<Text>
						Generous financial help is available to anyone who needs it to walk Student and Pilgrim Cross through the SCA, our own registered charity. The SCA can subsidise the cost of the pilgrimage and any equipment you might need to walk, such as a sleeping bag or sturdy shoes. To apply for a bursury tick the box asking for SCA support when booking online for Student and Pilgrim Cross and you’ll be contacted by the leader of your preferred route for further details. They'll do the rest.
				</Text>
					<Text>
						If your financial circumstances change after booking and you need help, you can still ask your leg leader about a bursary at any time before or during the pilgrimage.
						</Text>

					<Spacer size={50}></Spacer>

					<Heading>The SCA</Heading>
					<Text>
						The Student Cross Association (SCA) is a registered charity (charity number 1019313) which exists to raise and disburse funds to needy pilgrims to enable them to walk Student and Pilgrim Cross.
				</Text>
					<Text>
						The SCA provides two types of grants for needy pilgrims walking Student and Pilgrim Cross:
						</Text>
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
			</Row>

		</PageContainer>
	</PageBase >
}