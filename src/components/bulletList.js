import styled from 'styled-components';

const BulletList = styled.ul`
  margin-left: 50px;

  & li::before {
    content: "\\2022";  
    color: ${({ theme }) => theme.red};
    font-weight: bold;
    display: inline-block; 
    width: 1em;
	font-size: 1em;
    margin-left: -1em; 
  }
`

export default BulletList;