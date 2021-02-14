import React from "react";
import styled from "styled-components";
import Button from "./button";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.red};
  height: 250px;
  text-align: left;
  padding: 2rem 0;
  position: absolute;
  top: 50px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 0.5rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const Link = ({ children, href = '#', className }) => (
  <a href={href} className={className}>{children}</a>
);

const CTA = styled(Button)`
	background-color: white;
	color: ${({ theme }) => theme.red} !important;
	font-weight: 600;
	font-size: 1em;
	margin-top: 1.5rem;
	box-shadow: none;
	align-self: center;	
	padding: 0.5rem 0.7rem !important;
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/about">About</Link>
      <Link href="/legs">Routes</Link>
      <Link href="/sca">Bursaries</Link>
      <Link href="/news">News</Link>
      <CTA href="/legs">Walk with us</CTA>
    </StyledMenu>
  )
}



export default Menu;