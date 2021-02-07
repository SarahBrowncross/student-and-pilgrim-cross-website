import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import BulletList from "../components/bulletList";
import { Heading, Subheading } from "../components/headings";
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
			<Header pink content={'News'} src={'news-square.jpg'} alt={'a candle burning'}></Header>



			<Row>
				<SectionLeft width={70}>
					<Heading>Statement on Student and Pilgrim Cross 2021 and COVID-19</Heading>
					<Subheading>Update: 31 January 2021</Subheading>
					<Text>
						In March 2020 we took the decision not to go ahead as normal due to the global pandemic, indeed shortly after we announced our decision the country went into lockdown for the first time.<br /><br />

					Since then we have continually monitored the developing picture with the hope that we could return to normal in 2021. Whilst the transition (as so many others have) to a virtual alternative was successfully delivered and widely appreciated it hasn’t replaced the physical pilgrimage.<br /><br />

					However, given the current lockdown, and whilst the ongoing vaccination operation begins to offer hope, normal life (whatever that may look like in the future,) is still some time away and this means Student and Pilgrim Cross will once again not happen physically but plans are being formed to provide a virtual pilgrimage once more for Easter 2021, building on the success of 2020.<br /><br />

					This is a decision taken after careful consideration and discussion with all concerned, but more importantly like everyone else we have a responsibility to follow current guidance and to protect each other, our families, and our communities. Our thoughts and prayers continue for all those affected in anyway by the pandemic and those who are working to keep us safe.<br /><br />

					Any enquiries regarding this matter should be directed to the <Link href='mailto:co-ordinator@studentcross.org.uk'>National director</Link>.<br /><br />

					Online registration for 2021 will open in the near future and our groups are currently finalising their plans for gathering virtually to celebrate Holy Week and Easter. More details will follow in the next few weeks.
				</Text>
				</SectionLeft>
			</Row>
			<Footer></Footer>
		</PageContainer>
	</PageBase >
}