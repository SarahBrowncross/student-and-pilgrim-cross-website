import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import BulletList from "../components/bulletList";
import { Heading } from "../components/headings";
import Footer from "../components/footer";

const Text = styled.p`
  font-size: 1.1em;
  margin: 10px 0px;
`

const Link = styled.a`
color: ${({ theme }) => theme.red};
`

export default function SCA() {
	return <PageBase>
		<PageContainer>
			<Header pink content={'Financial help for families'} src={'/support-square.jpg'} alt={'two women hugging'}></Header>



			<Row>
				<SectionLeft width={70}>
					<Text>
						The SCA supports needy families wanting to take part in a family leg each Easter.<br /><br />

					As agreed by the SCA trustees, the funding categories are described in non-financial terms. These descriptors were written in consultation with a number of family leg walkers. They are being used as part of the application process to help families identify how much to pay.<br /><br />

					As a family booking on a family leg of Student and Pilgrim Cross, you are asked to self-declare in one of the following 3 categories:<br /><br />
					</Text>
					<BulletList>
						<li>
							<b>Category 1:</b> If you can afford to come without becoming stressed or worried about the financial aspect then you would probably fit into category 1
							</li>
						<li>
							<b>Category 2:</b> If coming on a family leg would put your family under undue financial strain, and might prevent you from coming, then you would probably fit into this category
						</li>
						<li>
							<b>Category 3:</b> If you simply cannot afford to come without significant help then you are likely to fit into this category.
						</li><br />
					</BulletList>
					<Text>
						These categories would equate to the fully waged, low waged and unwaged categories in the non-family, adult-only legs.<br /><br />

					There will be always be families who are close to the borders of these categories and there is an element of discretion and trust that the SCA allows. The SCA Treasurer is available to talk to if a family is really struggling to decide into which category they fit.<br /><br />

						<Link href='mailto:association@studentcross.org.uk'>Contact the SCA</Link> to find out more about family funding.
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