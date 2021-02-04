import React from "react";
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"

const PageContainer = styled.main`
display: flex;
flex-direction: column;
align-items: stretch;
min-height: 100vh;
max-width: 100vw;
overflow-x: hidden;
`

const SectionPink = styled.section`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  background: #F8F4F2;
`

const SectionWhite = styled.section`
  display: flex;
  padding: 0px 50px;
  justify-content: space-between;
`

const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => props.width ?? 50}%;
  align-self: flex-start;
`

const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`

const Spacer = styled.div`
  height: ${(props) => props.size}px;
`

const Button = styled.button`
  background-color: #DC182C;
  color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.35);
  border: 0;
  padding: 0.4em 0.8em;
  margin-top: 1em;
  align-self: flex-end;
`

const BulletList = styled.ul`
  font-weight: 400;
  font-size: 1em;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 50px;

  & li::before {
    content: "\\2022";  
    color: #DC182C;
    font-weight: bold;
    display: inline-block; 
    width: 1em; 
    margin-left: -1em; 
  }
`

const Aside = styled.aside`
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.6em;
  border-left: 6px solid #DC182C;
  padding-left: 25px;

  & b{
    font-weight: 400;
  }
`

const Quote = styled.blockquote`
  font-weight: 300;
  font-size: 1.6em;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.6);
`

const Cite = styled.cite`
  font-style: italic;
  font-weight: 600;
  font-size: 1.6em;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.6);
`

export default function Home() {
  return <Layout>
    <PageContainer>
      <Header background={'#F8F4F2'} content={'An Easter walking Pilgrimage to Walsingham'}></Header>

      <Spacer size={50}></Spacer>

      <SectionWhite>
        <SectionLeft>
          <BulletList>
            <li>12 different routes</li>
            <li>lengths of 1, 3 or 7 days</li>
            <li>every Easter (virtual for 2021!)</li>
            <li>food and accomodation included</li>
            <li>financial help available</li>
          </BulletList>
        </SectionLeft>
      </SectionWhite>

      <Spacer size={50}></Spacer>

      <SectionPink>
        <SectionLeft width={30}>
          <Aside>
            During the pilgrimage we walk, eat, sleep and pray <b>in community</b>
            <Button>See a typical day on pilgrimage</Button>
          </Aside>
        </SectionLeft>
        <SectionRight>
          <Quote>
            My most valued friendships were made on Student and Pilgrim Cross.
        </Quote>
          <Cite>- Alice Pilgrim</Cite>

        </SectionRight>
      </SectionPink>

      <Spacer size={100}></Spacer>

      <SectionWhite>
        <SectionLeft width={40}>
        </SectionLeft>
        <SectionRight>
          <Aside>
            There are <b>12 groups</b>, or legs, each starting from a different point and each with their <b>own unique character</b>
          </Aside>
          <Button>Choose a Leg</Button>
        </SectionRight>
      </SectionWhite>

      <Spacer size={50}></Spacer>

      <SectionPink>
        <SectionLeft width={50}>
          <Aside>
            We want everyone to be able to walk regardless of their financial situation. <b>Bursaries are available</b> to cover the cost of the pilgrimage and any equipment you might need.
          </Aside>
          <Button>Find out more</Button>
        </SectionLeft>
        <SectionRight>
        </SectionRight>
      </SectionPink>

    </PageContainer >
  </Layout>
}
