import React from "react";
import styled from "styled-components"
import PageBase from "../components/pageBase"
import MainPageHeader from "../components/mainPageheader"
import Button from "../components/button";
import { PageContainer, SectionLeft, Row, SectionRight } from "../components/layout";
import Aside from "../components/aside";
import BulletList from "../components/bulletList";
import Footer from "../components/footer";

const HomeBulletList = styled(BulletList)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`

const HomeAside = styled(Aside)`
  font-size: 1.2em;
  line-height: 1.6em;
`

const Quote = styled.blockquote`
  font-size: 1.6em;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.6);
`

const Cite = styled.cite`
  font-style: italic;
  font-weight: 600;
  font-size: 1.6em;
  color: rgba(0, 0, 0, 0.6);
`

export default function Home() {
  return <PageBase title="the Easter pilgrimage to Walsingham">
    <PageContainer>
      <MainPageHeader pink content={'An Easter walking Pilgrimage to Walsingham'} src={'top.jpg'}></MainPageHeader>

      <Row>
        <SectionLeft>
          <HomeBulletList>
            <li>routes for adults and families</li>
            <li>lengths of 1, 3, 5 or 7 days</li>
            <li>every Easter (running virtually and in person in 2022!)</li>
            <li>food and accommodation included</li>
            <li>financial help available</li>
          </HomeBulletList>
        </SectionLeft>
      </Row>

      <Row pink>
        <SectionLeft width={30}>
          <HomeAside>
            During the pilgrimage we walk, eat, sleep and pray <b>in community</b>
          </HomeAside>
          <Button href='/about'>Find out more</Button>
        </SectionLeft>
        <SectionRight>
          <Quote>
            My most valued friendships were made on Pilgrim Cross.
          </Quote>
          <Cite>- Laura M, pilgrim</Cite>

        </SectionRight>
      </Row>

      <Row>
        <SectionLeft width={40}>
        </SectionLeft>
        <SectionRight>
          <HomeAside>
            There are <b>11 groups</b>, or legs, each starting from a different point and each with their <b>own unique character</b>
          </HomeAside>
          <Button href='/legs' >
            Choose a Group
          </Button>
        </SectionRight>
      </Row>

      <Row pink>
        <SectionLeft width={50}>
          <HomeAside>
            We want everyone to be able to walk regardless of their financial situation. <b>Bursaries are available</b> to cover the cost of the pilgrimage and any equipment you might need.
          </HomeAside>
          <Button href='/sca'>Find out more</Button>
        </SectionLeft>
        <SectionRight>
        </SectionRight>
      </Row>
      <Footer></Footer>
    </PageContainer >
  </PageBase>
}
