import React, { useState } from 'react';
import styled from "styled-components";
import Button from "./button";
import Burger from './burger';
import Menu from './menu';

const Logo = styled.a`
	font-family: 'Expletus Sans', cursive;
	font-size: 2em;
	color: white;
	text-decoration: none;
	@media (max-width: 768px) {
	font-size: 1.2em;
}
`;

const NavBarBase = styled.nav`
	background-color: ${({ theme }) => theme.red};
	box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.35);
	z-index: 9;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;

	@media (max-width: 768px) {
		padding: 0 5px;
	}
`;

const NavBarPlaceholder = styled.div`
	height: 40px;
`;

const CTA = styled(Button)`
	background-color: white;
	color: ${({ theme }) => theme.red};
	font-weight: 600;
	font-size: 1em;
	margin: 0;
	box-shadow: none;
	align-self: center;
	@media (max-width: 768px) {
	display: none;
	}
	:before {
		background-color: ${({ theme }) => theme.red};
	}
`;

const Link = ({ children, href = '#', className }) => (
	<li><a href={href} className={className}>{children}</a></li>
);

const Links = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;

	& a {
		padding: 0px 1em;
		text-decoration: none;
		color: white;
		font-size: 1.2em;
		font-weight: 400;
		position: relative;

		@media (max-width: 768px) {
			display:none
		}

		:before {
			background-color: white;
			width: 0px;
			position: absolute;
			height: 2px;
			bottom: 0;
			left: 0.8em;
			content: '';
			transition: width 0.2s ease-out;
		}

		:hover:before {
			width: calc(100% - 1.6em);
		}
	}
`;
const BurgerDiv = styled.span`
@media (min-width: 768px) {
		display:none
		}
`



const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<NavBarPlaceholder />
			<NavBarBase>
				<Logo href='/'>PX</Logo>

				<Links>
					<Link href="/about">About</Link>
					<Link href="/legs">Routes</Link>
					<Link href="/sca">Bursaries</Link>
					<Link href="/news">News</Link>
				</Links>
				<CTA href="/legs">Walk with us</CTA>
				<BurgerDiv>
					<Burger open={open} setOpen={setOpen}></Burger>
					<Menu open={open} setOpen={setOpen}></Menu>
				</BurgerDiv>
			</NavBarBase>
		</>
	)
}


export default NavBar;