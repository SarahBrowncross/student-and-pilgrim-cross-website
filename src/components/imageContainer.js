import styled from "styled-components";

const ImageContainer = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
overflow: hidden;
flex-basis: auto;
margin-right: 20px;

@media (max-width: 768px) {
  align-self: center;
  margin-right: 0;
  margin-bottom: 20px;
}
`

export default ImageContainer;