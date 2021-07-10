import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import theme from "../theme"
import NavBar from "./navbar"

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1.6em;
	font-family: 'Open Sans', sans-serif;
  	font-style: normal;
	font-weight: 300;
}
b {
	font-weight: 400;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

const PageWrapper = styled.div`
	overflow: hidden;
	width: 100vw;
	max-width: 100%;
	position: relative;
`
export default function PageBase({ children, title }) {
	return (
		<>
			<Helmet>
				<title>Pilgrim Cross - {title}</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@600&display=swap" rel="stylesheet" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,600&display=swap" rel="stylesheet" />
				<meta name="description" content="offical website of Pilgrim Cross, the Easter cross-carrying pilgrimage to Walsingham" />
				<meta name="keywords" title="keywords" content="pilgrimage, Easter, Student Cross, Pilgrim Cross, Pilgrim Cross, Walsingham, Lent, Holy Week, East Anglia, Norfolk, Christian festivals, university students" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#DC182C" />
				<meta name="theme-color" content="#DC182C" />
			</Helmet>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<PageWrapper>
					<NavBar />
					{children}
				</PageWrapper>
			</ThemeProvider>
		</>
	)
}