import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import atob from 'atob';

const StyledLink = styled.a`
	color: ${({ theme }) => theme.red};
`

const Link = ({ href = '#', mailto, children }) => {
	const [newHref, setNewHref] = useState(href);
	useEffect(() => {
		if (mailto !== undefined) {
			setNewHref(`mailto:${atob(mailto)}`)
		}
	}, []);
	return <StyledLink href={newHref}>{children}</StyledLink>
}

export default Link