import React from "react";
import styled from "styled-components";
import { Instagram, Facebook, Twitter } from '@styled-icons/boxicons-logos';

const Logo = styled.a`
	font-family: 'Expletus Sans', cursive;
	font-size: 2em;
	color: white;
	text-decoration: none;
`;

const FooterBase = styled.nav`
	background-color: ${({ theme }) => theme.red};
	box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.35);
	height: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 5px;
	flex-direction: column;
`;

const Link = ({ children, href = '#', className }) => (
	<li><a href={href} className={className}>{children}</a></li>
);

const Links = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	& a {
		padding: 1em;
		text-decoration: none;
		color: white;
		font-size: 1em;
		font-weight: 400;
		position: relative;

		:before {
			background-color: white;
			width: 0px;
			position: absolute;
			height: 2px;
			bottom: 0.8em;
			left: 0.8em;
			content: '';
			transition: width 0.2s ease-out;
		}

		:hover:before {
			width: calc(100% - 1.6em);
		}
	}
	@media (max-width: 568px) {
    font-size: 0.7em;
}
`;

const SCAtext = styled.p`
	font-size: 0.8em;
	padding: 1em;
	line-height: 1.3em;
	text-align: center;
	color: white;

	& a{
		color: white;
	}
`;


const Footer = () => (
	<>
		<FooterBase>
			<Links>
				<Link href="https://www.instagram.com/student_cross/"><Instagram size={24} /></Link>
				<Link href="https://www.facebook.com/studentcross"><Facebook size={24} /></Link>
				<Link href="https://twitter.com/studentcross"><Twitter size={24} /></Link>
			</Links>
			<Links>
				<Link href="/data-policy">Data and Privacy</Link>
				<Link href="/safeguarding">Safeguarding</Link>
				<Link href="/contact">Contact Us</Link>
			</Links>
			<SCAtext>Student and Pilgrim Cross is supported by the <a href="/sca">Student Cross Association</a> Registered Charity number 1019313</SCAtext>
			<Logo href='/'>S+PX</Logo>
		</FooterBase>
	</>
)


export default Footer;