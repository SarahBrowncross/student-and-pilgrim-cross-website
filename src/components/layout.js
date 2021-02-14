import styled from 'styled-components';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
`

export const Row = styled.section`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  background: ${({ pink, theme }) => pink ? theme.pink : '#FFFFFF'};
  z-index: 2;

  @media (max-width: 768px){
    flex-direction: column;
    padding: 10px;
  }
`

export const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => props.width ?? 50}%;
  align-self: flex-start;

  @media (max-width: 768px){
    width: 100%;
    padding: 30px 0;
  }
`

export const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;

  @media (max-width: 768px){
    width: 100%;
    padding: 30px 0;
  }
`