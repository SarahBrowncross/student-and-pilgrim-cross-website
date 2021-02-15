import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import BulletList from "../components/bulletList";
import { Subheading } from "../components/headings";
import Footer from "../components/footer";
import Link from "../components/link"

const Text = styled.p`
  font-size: 1.1em;
  margin: 10px 0px;
`

export default function SCA() {
	return <PageBase title="fundraising">
		<PageContainer>
			<Header pink content={'Fundraising and regular giving'} src={'/support-square.jpg'} alt={'two women hugging'}></Header>


			<Row>
				<SectionLeft width={70}>
					<Subheading>Want to help pilgrims to take part in Student and Pilgrim Cross?</Subheading>
					<Subheading>Want to make regular donations to the SCA?</Subheading>
					<Subheading>Got some ideas for fundraising?</Subheading>

					<Text>
						The Student Cross Association (SCA) encourages both one-off donations as well as regular giving in order to help support students to take part in Student and Pilgrim Cross.
						The main methods of fundraising currently are:<br />
					</Text>
					<BulletList>
						<li>
							through individual donations
							</li>
						<li>
							producing and selling Student Cross Association merchandise.
						</li><br />
					</BulletList>
					<Text>
						When the Association started in the 1990s, it was able to disburse only limited funds, under £500 each year. As income has grown through fundraising and donations, the SCA is now able to disburse more money through grants to legs and individual supported places. The SCA currently disburses more than £6,000 every year in grants.<br /><br />

					Individual donations are the most important part of the Association's annual income - they allow the Association to plan ahead and be able to distribute a guaranteed number of grants every year. Regular donations are welcomed in the form of monthly or annual standing orders.<br /><br />

					If you would like to make a regular donation, please ask for a Regular Giving and Gift Aid form by <Link mailto="YXNzb2NpYXRpb25Ac3R1ZGVudGNyb3NzLm9yZy51aw==">emailing the SCA</Link>.
					Please include your name, postal and email addresses and a contact phone number. Say whether you would prefer to receive a downloadable (pdf) form sent by email or a paper form sent by post.<br /><br />

Gift Aid - if you are a UK taxpayer, you can help us to increase the value of your donation, at no extra cost to yourself, by completing the Gift Aid Declaration on the donation form. This will enable us to increase your donation by 28p for every £1 you give.<br /><br />

If you have other ideas for fundraising, please 						<Link mailto="YXNzb2NpYXRpb25Ac3R1ZGVudGNyb3NzLm9yZy51aw==">contact the SCA</Link>.
					</Text>

					<Spacer size={50}></Spacer>


					<Link href='/fundraising'>Find out more about regular giving and fundraising</Link>
					<Link href='/sca-committee'>Find out more about SCA reports, committee and contacts</Link>

				</SectionLeft>
			</Row>
			<Footer></Footer>
		</PageContainer>
	</PageBase >
}