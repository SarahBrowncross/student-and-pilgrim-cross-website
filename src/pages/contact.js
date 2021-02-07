import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import { Heading, Subheading } from "../components/headings";
import Footer from '../components/footer'

const Link = styled.a`
color: ${({ theme }) => theme.red};
`
const Name = styled.p`
font-size: 2em;
margin: 20px;
line-height:1.4em;

@media (max-width: 768px) {
	font-size: 1.4em;
}
`


export default function Contact() {
	return <PageBase>
		<PageContainer>
			<Header content={'Get in touch'} src={'contact-square.jpg'} alt={'woman holding a cup of tea and cake'}></Header>
			<Row pink>
				<SectionLeft width={'80%'}>
					<Heading>Mailing list</Heading>
					<Name><Link href="https://docs.google.com/forms/d/e/1FAIpQLSdFxcsfq_Ulqiah-sDvbSNXaG59G4MVhW9DwCcdL2cZvfsC9w/viewform?embedded=true&amp;usp=embed_googleplus">Join our mailing list</Link></Name>
					<Spacer size={'50'}></Spacer>
					<Heading>Contacts</Heading>
					<Name><Link href='mailto:info@studentcross.org.uk'>General information</Link></Name>
					<Name><Link href='mailto:co-ordinator@studentcross.org.uk'>National director</Link> - Craig Ince</Name>
					<Name><Link href='mailto:music@studentcross.org.uk'>Music director</Link> - Naomi Awre</Name>
					<Name><Link href='mailto:info@studentcross.org.uk'>Recruitment director</Link> - Laura Mitcham</Name>
					<Name><Link href='mailto:liturgy@studentcross.org.uk'>Liturgy chair</Link> - Claire Brennan</Name>
					<Name><Link href='mailto:association@studentcross.org.uk'>Student Cross Association Chair</Link> - Jonathan Riley</Name>
					<Name><Link href='mailto:editor@studentcross.org.uk'>Website, online booking, data management</Link> - Murray White</Name>
				</SectionLeft>
			</Row>

			<Footer></Footer>
		</PageContainer>
	</PageBase >
}