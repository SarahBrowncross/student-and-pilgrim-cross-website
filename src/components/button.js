import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.red};
  color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.35);
  border: 0;
  padding: 0.4em 0.8em;
  margin-top: 1em;
  max-width: 200px;
`;

export default Button;