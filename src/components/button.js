import styled from "styled-components";

const Button = styled.a`
  background-color: ${({ theme }) => theme.red};
  color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.35);
  border: 0;
  padding: 0.4em 0.8em;
  margin-top: 1em;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  align-self: flex-end;
  position: relative;

  :before {
	background-color: white;
  width: 0px;
  position: absolute;
  height: 2px;
  bottom: 0.4em;
  left: 0.8em;
  content: '';
  transition: width 0.2s ease-out;
}

:hover:before {
	width: calc(100% - 1.6em);
}
`;

export default Button;
