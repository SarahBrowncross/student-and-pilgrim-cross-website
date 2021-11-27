import styled from "styled-components";

export const BadgeRound = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
overflow: hidden;
flex-basis: auto;
margin-right: 20px;

@media (max-width: 768px) {
  align-self: center;
  margin-right: 20px;
  margin-bottom: 20px;
}
`
export const BadgeSquare = styled.div`
width: 40px;
height: 40px;
overflow: hidden;
flex-basis: auto;
margin-right: 20px;

@media (max-width: 768px) {
  align-self: center;
  margin-right: 20px;
  margin-bottom: 20px;
}
`

export const BadgeContainer = styled.div`
display: flex;
margin-bottom: 15px;
`

export const BadgeImage = styled.img`
height: 40px;
`

