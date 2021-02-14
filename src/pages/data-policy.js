import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import { Heading, Subheading } from "../components/headings";
import Footer from '../components/footer'

const Text = styled.p`
  font-size: 1.1em;
  margin: 10px 0px;
`
const Link = styled.a`
color: ${({ theme }) => theme.red};
`

export default function Contact() {
	return <PageBase title="data and privacy">
		<PageContainer>
			<Header content={'Data and privacy policy'} src={'/bible-square.jpg'} alt={'open bible'}></Header>
			<Row pink>
				<SectionLeft width={'70'}>
					<Text>The organisers, leaders and officers of the Student and Pilgrim Cross pilgrimage - including the Student Cross Association (SCA) - recognise and treat as serious and important the privacy of all those who take part in the pilgrimage and communicate with us at any time.<br /><br />

					There are a number of ways that you may share personal information and data with Student and Pilgrim Cross organisers and officers before, during and after taking part in the pilgrimage. In all of these interactions, you consent to the collection and use of your personal information in accordance with this policy.<br /><br />

					This policy covers centrally-managed and leg-specific activities of Student and Pilgrim Cross and the SCA. National officers and leg leadership teams may only keep personal contact data of present and past participants of the pilgrimage who have opted in for that data to be kept.<br /><br />

					The main principle used in all interactions is that your personal data is only gathered and used for the purpose for which it is intended. We will not sell, license or trade your personal information to others, including direct marketing companies or other such organisations or businesses.<br /><br />

					The management and use of personal information is carried out within current UK data protection laws. This policy has been developed to take account of the use of digital technology but it is subject to change and any such changes may only be notified within this policy.<br /><br />

					The processing of personal data is regulated by current law including the General Data Protection Regulation (GDPR). Any requests by individuals for access to information held about them by Student and Pilgrim Cross should be made in writing to us by <Link href='mailto:data@studentcross.org.uk'>email.</Link></Text>

					<Subheading>How personal information is collected</Subheading>

					<Text>The remainder of this Policy describes the specific, main ways that you may share personal information with Student and Pilgrim Cross. This list is not exhaustive and personal information may be gathered and used for other specific reasons as required.</Text>

					<Subheading>1. Booking and applications</Subheading>

					<Text>To facilitate bookings to join each annual Student and Pilgrim Cross pilgrimage, organisers and leaders operate an online/digital booking system. We require applicants to apply by submitting information, including personal contact information, through that system. This personal data is required in order to facilitate your participation in the pilgrimage and ensure that we can send you the information necessary to take part.<br /><br />

					If an applicant wishes to withhold their consent from other permissions sought, eg appearing in promotional photography, this needs to be recorded in the booking system to ensure we are meeting our privacy commitments.<br /><br />

					Online bookings are submitted into a central digital booking record that can be accessed only by the National Director, Recruitment Director and Online Booking Co-ordinator. Bookings for a specific pilgrim group are additionally made available to the leaders of the preferred pilgrim group (or 'leg'). Legs may keep contact details for up to one year after the pilgrimage for the purpose of invitations to reunions and the following year’s pilgrimage.<br /><br />

					Applicants are asked to opt-in to allow us to keep some personal data (including name and contact details) after the pilgrimage for the purpose of marketing the pilgrimage in future years (see 3. Keeping in touch).<br /><br />

					The rest of the applicant's booking data may be aggregated without identification for statistical purposes, but otherwise is deleted post-Easter.</Text>

					<Subheading>2. Student Cross Association</Subheading>

					<Text>The Student Cross Association (SCA) is a registered charity that exists to raise and disburse funds to needy pilgrims to enable them to take part in Student and Pilgrim Cross.<br /><br />


As part of the pilgrimage booking process, applicants are asked to self-declare in one of several income categories or to request further financial help from the SCA. This declaration is made available to the leader of your preferred leg and may be made available to the SCA Treasurer and Trustees to help them to decide if you are entitled to an SCA grant or other bursary.<br /><br />


Leg leaders are asked to provide the SCA with an outline summary of their leg annual accounts. This allows the SCA Treasurer to assess that the leg has used grant money appropriately and is budgeting responsibly.<br /><br />


The SCA maintains financial records digitally or manually to record its income and expenditure and other financial decisions in accordance with its status as a registered charity and the legal requirements of the Charity Commission. These records include the name, contact details and tax status of regular donors. These records are maintained securely by the SCA Treasurer and may be accessed by the Treasurer or Trustees.<br /><br />


To find out more about the SCA including its grants policy and annual accounts go to <Link href='/sca'>the SCA page.</Link></Text>

					<Subheading>3. Keeping in touch</Subheading>

					<Text>When providing your personal information for the purpose of applying to take part in the Student and Pilgrim Cross pilgrimage, you will choose whether to opt in or not to receive ongoing mailings from us. If you opt in, we reserve the right to keep your name and personal contact information for the purpose of marketing the pilgrimage and other activities in future years. You can also opt-in to our mailing list at any time via <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdFxcsfq_Ulqiah-sDvbSNXaG59G4MVhW9DwCcdL2cZvfsC9w/viewform?embedded=true&amp;usp=embed_googleplus'>the form.</Link><br /><br />

We may use this information to inform you of news and information about the pilgrimage or to invite you to take part in future pilgrimages or other events or activities organised by Student and Pilgrim Cross. Such communications may include emails, phone calls or invites to join or follow social media groups, lists or streams.<br /><br />

You have the right to amend or stop receiving any or all such communications at any time. To request amendment or removal from any communications including mailing lists, please make your request in writing to us via <Link href='mailto:data@studentcross.org.uk'>email.</Link></Text>


					<Subheading>4. Website and other online places</Subheading>

					<Text>The main Student and Pilgrim Cross website does not currently require visitors to log in to access any information. As such no personal information is required to use the website. In common with most websites, our website may gather logs of activity including location and IP of the user’s computer.<br /><br />

Student and Pilgrim Cross currently uses a number of social media platforms, including Facebook and Twitter. Some of these outputs are managed by national officers, some by leg leaders (or other volunteers acting on their behalf). Users can choose to join or follow our social media groups or feeds, subject to the privacy and data policies of the relevant social media platform.<br /><br />

					</Text>

					<Subheading>5. Online video-conference meetings</Subheading>

					<Text>Student and Pilgrim Cross and the SCA periodically host online meetings via third-party video conferencing tools. Some of these meetings are recorded for catch-up or publicity purposes. Examples of online meetings include organisational committees, general meetings, liturgies and other pilgrimage activities.<br /><br />

					Where a meeting is being recorded, the meeting host should inform participants beforehand or at the start of the meeting. Meeting attendees have the right to switch off their video, mute their microphone or leave the recorded meeting, otherwise their participation is deemed to be consent to be recorded.<br /><br />

					Attendees of online meetings are also subject to the data and privacy policies of the providors of video conferencing tools used.<br /><br />

Policy version: February 2021</Text>
				</SectionLeft>
			</Row>

			<Footer></Footer>
		</PageContainer>
	</PageBase >
}