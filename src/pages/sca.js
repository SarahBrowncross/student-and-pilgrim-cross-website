import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import Link from "../components/link"
import BulletList from "../components/bulletList";
import { Heading } from "../components/headings";
import Footer from "../components/footer";

const Text = styled.p`
  font-size: 1.1em;
  margin: 10px 0px;
`

export default function SCA() {
	return <PageBase title="bursaries">
		<PageContainer>
			<Header pink content={'Financial support to walk'} src={'/support-square.jpg'} alt={'two women hugging'}></Header>

			<Spacer size={30}></Spacer>

			<Row>
				<SectionLeft width={70}>
					<Heading>Bursaries</Heading>
					<Text>
						Generous financial help is available to anyone who needs it to walk Pilgrim Cross through the SCA, our own registered charity. You don't need to be a student to get help. The SCA can subsidise the cost of the pilgrimage and any equipment you might need to walk, such as a sleeping bag or sturdy shoes. To apply for a bursary tick the box asking for SCA support on our booking form.
					</Text>
					<Text>
						If your financial circumstances change after booking and you need help, you can still ask your leg leader about a bursary at any time before or during the pilgrimage.
					</Text>

					<Spacer size={50}></Spacer>

					<Heading>The SCA</Heading>
					<Text>
						The Student Cross Association (SCA) is a registered charity (charity number 1019313) which exists to raise and disburse funds to needy pilgrims to enable them to walk Pilgrim Cross.
					</Text>
					<Text>
						The SCA provides two types of grants for needy pilgrims walking Pilgrim Cross:
					</Text>
					<BulletList>
						<li>
							<b>Fixed grants:</b> These are given annually to help unwaged or low waged pilgrims. The amount is based on the funds available and subsidises the cost of the walk for unwaged/low waged pilgrims. The SCA also gives <Link href='/family-support'>grants to families</Link> who need financial help to take part in a family leg. All grants are made on behalf of qualifying pilgrims directly to their leg, allowing the leg to charge lower fees for unwaged and low-waged pilgrims. For Easter 2022, the SCA grants are £80 for unwaged pilgrims, £45 for low waged pilgrims.
						</li>
						<li>
							<b>Direct bursaries:</b> Individual pilgrims can apply for this extra bursary. It can help with things like travel costs to and from Pilgrim Cross pilgrimages, meeting the cost of equipment such as sleeping bags or waterproofs or, in special cases, meeting the total cost of the walk for students or unwaged pilgrims. If accepted, the bursary will be made on the individual pilgrim's behalf to their leg.
						</li>
					</BulletList>
					<Spacer size={50}></Spacer>
					<Link href='/fundraising'>Find out more about regular giving and fundraising</Link>
					<Link href='/sca-committee'>Find out more about SCA reports, committee and contacts</Link>

				</SectionLeft>
			</Row>
			<Footer></Footer>
		</PageContainer>
	</PageBase >
}