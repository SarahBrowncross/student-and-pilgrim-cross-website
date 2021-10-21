import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import { Heading, Subheading } from "../components/headings";
import Footer from '../components/footer'
import Aside from "../components/aside"
import Link from "../components/link";

const Name = styled.p`
font-size: 1.2em;
margin: 20px;
line-height:1.4em;

@media (max-width: 768px) {
	font-size: 1.4em;
}
`
export default function Contact() {
	return <PageBase title="contact">
		<PageContainer>
			<Header content={'Get in touch'} src={'/contact-square.jpg'} alt={'woman holding a cup of tea and cake'}></Header>
			<Row pink>
				<SectionLeft width={'70'}>
					<Spacer size={50}></Spacer>
					<Aside>
						<p>If you can't find the answer to your question on our site, or you'd like to learn more, get in touch!</p>
					</Aside>
					<Spacer size={50}></Spacer>
					<Heading>Mailing list</Heading>
					<Name><Link href="https://docs.google.com/forms/d/e/1FAIpQLSdFxcsfq_Ulqiah-sDvbSNXaG59G4MVhW9DwCcdL2cZvfsC9w/viewform">Join our mailing list</Link></Name>
					<Spacer size={'50'}></Spacer>
					<Heading>Contacts</Heading>
					<Name><Link mailto="aW5mb0BzdHVkZW50Y3Jvc3Mub3JnLnVr">General information</Link></Name>
					<Name><Link mailto="Y28tb3JkaW5hdG9yQHN0dWRlbnRjcm9zcy5vcmcudWs=">National director</Link> - Benedict Brien</Name>
					<Name><Link mailto="bXVzaWNAc3R1ZGVudGNyb3NzLm9yZy51aw==">Music director</Link> - Neville Yee</Name>
					<Name><Link mailto="aW5mb0BzdHVkZW50Y3Jvc3Mub3JnLnVr">Recruitment director</Link> - Laura Mitcham</Name>
					<Name><Link mailto="bGl0dXJneUBzdHVkZW50Y3Jvc3Mub3JnLnVr">Liturgy chair</Link> - Claire Brennan</Name>
					<Name><Link mailto="YXNzb2NpYXRpb25Ac3R1ZGVudGNyb3NzLm9yZy51aw==">Student Cross Association Chair</Link> - Jonathan Riley</Name>
					<Name><Link mailto="ZWRpdG9yQHN0dWRlbnRjcm9zcy5vcmcudWs=">Online booking, data management</Link> - Murray White</Name>
				</SectionLeft>
			</Row>

			<Footer></Footer>
		</PageContainer>
	</PageBase >
}