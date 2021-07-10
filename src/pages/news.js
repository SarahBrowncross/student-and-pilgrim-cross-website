import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import { Heading, Subheading } from "../components/headings";
import Footer from "../components/footer";
import Link from "../components/link";

const Text = styled.p`
  font-size: 1.1em;
  margin: 10px 0px;
`

export default function SCA() {
	return <PageBase title="news">
		<PageContainer>
			<Header pink content={'News'} src={'/news-square.jpg'} alt={'a candle burning'}></Header>



			<Row>
				<SectionLeft width={70}>
					<Heading>We are excited to announce our new name - Pilgrim Cross!</Heading>
					<Subheading>Update: 11 July 2021</Subheading>
					<Text>
						The name of our community has changed. Student Cross has a rich history, walking across the English countryside to the historic pilgrimage site of Walsingham since 1948, carrying large crosses as a witness to the salvation of the world at Easter.  Over the years, we have grown from our origins as a single group of male Catholic students from London to welcome families, all ages, genders, and those of all faiths and none.  We thought it was time to change our name to reflect this diversity and growth, and we are pleased to share this with you.<br /><br />

						Our organising team would like to give a huge thank you to all the volunteers who have been involved in making this possible and put in a lot of hard work behind the scenes.
						We look forward to joining together with this new name and continuing to celebrate our faith and fellowship under this new banner.<br /><br />

						We would like to invite you to join us in 2022, whether you are completely new or have walked before. We are open to all ages and beliefs and our multiple walking routes of different lengths, characters and styles means there's something for everyone. Many a couch potato has made it to Walsingham, and this year we will continue our successful virtual offering alongside the walking pilgrimage. If you'd like to find out more, visit our <Link href='/legs'>Walk with Us page</Link>.<br /><br />

					</Text>
					<Heading>Statement on Student Cross 2021 and COVID-19</Heading>
					<Subheading>Update: 31 January 2021</Subheading>
					<Text>
						In March 2020 we took the decision not to go ahead as normal due to the global pandemic, indeed shortly after we announced our decision the country went into lockdown for the first time.<br /><br />

						Since then we have continually monitored the developing picture with the hope that we could return to normal in 2021. Whilst the transition (as so many others have) to a virtual alternative was successfully delivered and widely appreciated it hasn’t replaced the physical pilgrimage.<br /><br />

						However, given the current lockdown, and whilst the ongoing vaccination operation begins to offer hope, normal life (whatever that may look like in the future,) is still some time away and this means Student Cross will once again not happen physically but plans are being formed to provide a virtual pilgrimage once more for Easter 2021, building on the success of 2020.<br /><br />

						This is a decision taken after careful consideration and discussion with all concerned, but more importantly like everyone else we have a responsibility to follow current guidance and to protect each other, our families, and our communities. Our thoughts and prayers continue for all those affected in anyway by the pandemic and those who are working to keep us safe.<br /><br />

						Any enquiries regarding this matter should be directed to the <Link mailto="Y28tb3JkaW5hdG9yQHN0dWRlbnRjcm9zcy5vcmcudWs=">National director</Link>.<br /><br />

						Online registration for 2021 will open in the near future and our groups are currently finalising their plans for gathering virtually to celebrate Holy Week and Easter. More details will follow in the next few weeks.
					</Text>
				</SectionLeft>
			</Row>
			<Footer></Footer>
		</PageContainer>
	</PageBase >
}