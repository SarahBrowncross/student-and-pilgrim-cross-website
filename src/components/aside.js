import styled from 'styled-components';

const Aside = styled.aside`
  border-left: 6px solid ${({ theme }) => theme.red};
  padding-left: 25px;

  & b{
    font-weight: 400;
  }
`

export default Aside;