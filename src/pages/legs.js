import React, { useState } from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Button from "../components/button"
import Spacer from "../components/spacer"
import Aside from "../components/aside"
import BulletList from '../components/bulletList'
import { Heading, Subheading } from "../components/headings";
import Footer from "../components/footer";
import Link from "../components/link";
import ImageContainer from "../components/imageContainer"
import { BadgeContainer, BadgeRound, BadgeImage, BadgeSquare } from "../components/badges";

const Tab = styled.button`
  width: 200px;
  position: relative;
  display: inline-block;
  padding: 15px 15px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 400;
  background: ${({ theme, active }) => active ? theme.pink : 'white'};

  :focus {
    outline: none;
  }

  @media (max-width: 963px) {
    width: 150px;
  }

  @media (max-width: 768px) {
    width: 33%;
    font-size: 0.8em;
  }

  @media (max-width: 568px) {
    padding: 10px 5px 10px;
  }
`

const SymbolsTab = styled(Tab)`
@media (max-width: 768px) {
    width: 99%;
    font-size: 0.8em;
  }
`

const TabBody = styled.section`
  background: ${({ theme }) => theme.pink};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px ;
  }
`

const LegContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const KeyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const KeySection = styled.dl`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-right: 40px;
  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  padding: 10px;
`
const KeyElement = styled.dt`
height: 40px;
`

const KeyDefinition = styled.dd`
margin-bottom: 10px;`

const LegTitle = styled(Heading)`
  @media (max-width: 768px) {
    align-self: center;
  }
`

const LegText = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 10;
`

const LegBio = styled.p``


const VirtualImageContainer = styled(ImageContainer)`
  align-self: center;
`

const TopImage = styled.img`
  height: 200px;
`
const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`


const Content = ({ tab }) => {

  if (tab === 0) {
    return <>
      <TabBody>
        <SectionLeft width={90}>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/midland_square.jpg" alt="smiling pilgrims in a field" />
            </ImageContainer>
            <LegText>
              <LegTitle>Midland</LegTitle>
              <Subheading><p>The 'joyous' leg</p><p>Starting on: Friday 8th April</p> Cost: £200 (waged)/£100 (low waged)/£80 (unwaged)</Subheading>
              <BadgeContainer>
                <BadgeRound><BadgeImage src="/lgbt.jpg" alt="explicitly welcoming to LGBTQ+" title="explicitly welcoming to LGBTQ+" /></BadgeRound>
                <BadgeRound><BadgeImage src="/no_cross.jpg" alt="does not carry a cross" title="not carrying a cross this year" /></BadgeRound>
                <BadgeRound><BadgeImage src="/pope-hat.png" alt="mostly Catholic liturgy" title="mostly Catholic liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/2-footprints.png" alt="moderate amount of walking" title="moderate amount of walking" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>Midland is a friendly, funloving and faithful leg. We are a lively and inclusive group, always ready to sing, dance and enjoy life. We are ecumenical but have a more Catholic approach. Our liturgy is challenging, reverent and fuelled by the Spirit. We aim for a mix of traditional and more modern elements including poetry and music from outside of the Church tradition. Midland leg has a tradition of welcoming LGBTQ+ people and a wide range of others who may have felt marginalised by the Church model of the “ideal Christian” and we have a tailored liturgy that preaches love and infinite respect for all of God’s people. <b>In 2022:</b> we will have a shorter amended route of around 80 miles, retaining all our best bits though not carrying a cross this year.  </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/london-square.jpg" alt="a woman carrying a cross" />
            </ImageContainer>
            <LegText>
              <LegTitle>London</LegTitle>
              <Subheading><p>The 'teamwork means dreamwork' leg</p><p>Starting on: Friday 8th April</p> Cost: £200 (waged)/£100 (low waged)/£60 (unwaged)</Subheading>
              <BadgeContainer>
                <BadgeRound><BadgeImage src="/lgbt.jpg" alt="explicitly welcoming to LGBTQ+" title="explicitly welcoming to LGBTQ+" /></BadgeRound>
                <BadgeRound><BadgeImage src="/1-person-cross.png" alt="carries a small cross" title="carries a small cross" /></BadgeRound>
                <BadgeRound><BadgeImage src="/ecumenical.png" alt="ecumenical liturgy" title="ecumenical liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/2-footprints.png" alt="moderate amount of walking" title="moderate amount of walking" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>
                We are the original leg of Pilgrim Cross and follow an ancient pilgrimage route with long established connections with the communities on our way. We are an inclusive and friendly group - you will become part of our supportive Christian community that stays connected throughout the year. We are trying to be as aware as we can be about our impact on our environment. Our liturgy will include Roman Catholic, Methodist and Anglican services along the way. <b>In 2022:</b> our focus is covid-safety. We'll be forming a bubble and walking a shorter route staying in 3 locations for several nights at a time. We'll be carrying a lighter, one person cross. We'll still be singing, praying, eating cake, enjoying each others company and hopefully experiencing a spiritual 'reboot'.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/northern-square.jpg" alt="people playing string instruments" />
            </ImageContainer>
            <LegText>
              <LegTitle>Northern</LegTitle>
              <Subheading><p>The 'late-night conversations' leg</p> <p>Starting on: Friday 8th April</p>Cost: £180 (waged)/£90 (low waged)/£45 (unwaged)</Subheading>
              <BadgeContainer>
                <BadgeRound><BadgeImage src="/lgbt.jpg" alt="explicitly welcoming to LGBTQ+" title="explicitly welcoming to LGBTQ+" /></BadgeRound>
                <BadgeRound><BadgeImage src="/no_cross.jpg" alt="does not carry a cross" title="not carrying a cross this year" /></BadgeRound>
                <BadgeRound><BadgeImage src="/ecumenical.png" alt="ecumenical liturgy" title="ecumenical liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/3-footprints.png" alt="large amount of walking" title="large amount of walking" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>Northern is a year round community that doesn't end when we reach Walsingham. We embrace everyone as they are and share our stories and talents with each other both during the pilgrimage and through the rest of the year. Our group has a diverse range of ages and experiences so we are never short of an interesting story. Our tales and music and evenings together mean that no one feels like an outsider for very long. We act as chaplains to one another with an ecumenical liturgy that is created by the community for the community. Northern Leg seeks to be a diverse and inclusive community, with LGBTQ+ pilgrims a visible part of the leg. Our liturgy creates a space for people to be in touch with their authentic selves. <b>In 2022:</b> Northern are very excited to be walking along their old route as far as possible in 2022. We will have the cross with us at night stops and will continue to fill our evenings with music and good humour.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/essex-square.jpg" alt="people walking along a beach with a cross" />
            </ImageContainer>
            <LegText>
              <LegTitle>Essex</LegTitle>
              <Subheading><p>The 'ice cream' leg</p><p>Starting on: Friday 8th April</p> Cost: £175 (waged)/£100 (low waged)/£55 (unwaged)</Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/3-person-cross.png" alt="carries a large cross" title="carries a large cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/ecumenical.png" alt="ecumenical liturgy" title="ecumenical liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/3-footprints.png" alt="large amount of walking" title="large amount of walking" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>Essex is the most coastal route, taking in the sights of sea, sand, an ice cream stop and hills! Praying, reflecting and worshipping together are important parts of our journey, and leading the liturgy is shared by members of the Leg, our chaplains and clergy and lay leaders in the communities we walk through, drawing on our different Christian traditions and life experiences. <b>In 2022:</b> We will be doing a hybrid walk of the existing route mixed with new off-road sections, featuring at least one ferry (subject to Covid restrictions allowing it to operate) and a morning walking along the beach front.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/Kettering.jpg" alt="young people walking on a road" />
            </ImageContainer>
            <LegText>
              <LegTitle>Kettering</LegTitle>
              <Subheading><p>The 'students and young adults' leg</p> <p>Starting on: Friday 8th April</p>Cost: £140 (waged)/£80 (low waged)/£50 (unwaged)</Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/3-person-cross.png" alt="carries a large cross" title="carries a large cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/pope-hat.png" alt="mostly Catholic liturgy" title="mostly Catholic liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/2-footprints.png" alt="moderate amount of walking" title="moderate amount of walking" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>Kettering walks through three counties- Northamptonshire, Cambridgeshire and Norfolk, taking in beautiful villages and long stretches of fen. All along the way, communities welcome us as we pass through. The variety of what we see on our way complements our liturgy which is organised daily by different members of the group and develops organically as our community does. We have a Catholic chaplain and celebrate Mass several times during the week. Whilst we welcome pilgrims of all backgrounds we are mostly made up of students and young adults. <b>In 2022:</b> we will be walking offroad and shorter distances than usual. It will be a great taster of what Pilgrim Cross is like, and a less physically challenging introduction to the pilgrimage.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/oxford-square.jpg" alt="people praying round a cross" />
            </ImageContainer>
            <LegText>
              <LegTitle>Oxford</LegTitle>
              <Subheading><p>The 'traditional' leg</p> <p>Starting on: Friday 8th April</p>Cost: £175 (waged)/£100 (low waged)/£50 (unwaged)</Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/3-person-cross.png" alt="carries a large cross" title="carries a large cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/ecumenical.png" alt="ecumenical liturgy" title="ecumenical liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/3-footprints.png" alt="large amount of walking" title="large amount of walking" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>The Oxford route is a bit like our journey with Christ - it may not be the most direct, but we get there in the end! We walk on tracks and country lanes, carrying our Cross. Usually around two thirds of our ecumenical group are students and young adults. On the road we sing, talk and pray; each day we also spend about an hour in silent reflection whilst we walk through beautiful countryside <b>In 2022:</b> we have a new, shorter route. We have routed away from busier roads and will be following the entirety of the Walsingham Way.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/ely-square.jpg" alt="group picture of pilgrims in front of a wooden cross" />
            </ImageContainer>
            <LegText>
              <LegTitle>Ely</LegTitle>
              <Subheading><p>The 'walkers' leg</p> <p>Starting on: Tuesday 12th April</p>Cost: £150 (waged)/£75 (low waged)/£50 (unwaged)</Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/3-person-cross.png" alt="carries a large cross" title="carries a large cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/3-footprints.png" alt="large amount of walking" title="large amount of walking" /></BadgeRound>
                <BadgeRound><BadgeImage src="/pope-hat.png" alt="mostly Catholic liturgy" title="mostly Catholic liturgy" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/3-days.png" alt="3 days of walking" title="3 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>Ely has a shorter route than most, making it ideal for those unable to walk for the whole week. Meeting on the Tuesday before Easter, we walk for three days; one day off-road and two days on. Our liturgies are carefully crafted and draw on the riches of church tradition and contemporary spirituality. Although we only walk three days, we cover 60 miles, making us the leg for walkers. <b>In 2022:</b> it will be business as usual for us!
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/easter-square.jpg" alt="children carrying a cross" />
            </ImageContainer>
            <LegText>
              <LegTitle>Easter</LegTitle>
              <Subheading><p>The 'one day' leg</p> <p>Starting on: Thursday 14th April</p>Cost: £65 (waged)/£35 (low/unwaged or children) - Pilgrims arrange their own travel and accomodation</Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/3-person-cross.png" alt="carries a large cross" title="carries a large cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/1-footprint.png" alt="small amount of walking" title="small amount of walking" /></BadgeRound>
                <BadgeRound><BadgeImage src="/pope-hat.png" alt="mostly Catholic liturgy" title="mostly Catholic liturgy" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/1-day.png" alt="1 day of walking" title="1 day of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>Easter meet up in Walsingham on Thursday to start celebrating the Easter services with the local parish followed by an evening of getting to know each other. We walk the 10 miles from Wells to Walsingham the next day, stopping along the way for reflections on our theme prepared by volunteers from the leg. The small amount of time together does not stop us from forming great friendships. Walkers on Easter arrange their own accommodation and travel - the fee goes towards the cost of two main meals and other general expenses. This group is for everyone, from those with young children or limited mobility to work commitments - our wide age range leads to very interesting conversations. All who want to celebrate Easter in word and song are welcome! <b>In 2022:</b> it will be business as usual for us!
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
        </SectionLeft>
      </TabBody>
    </>
  }
  if (tab === 1) {
    return <>
      <TabBody>
        <SectionLeft width={90}>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/wells-square.jpg" alt="children carrying a cross" />
            </ImageContainer>
            <LegText>
              <LegTitle>Wells</LegTitle>
              <Subheading><p>The 'community' leg</p><p>Starting on: Sunday 10th April</p><p>Cost:</p><p> Category 1 families*: £360 (adults), £180 (children aged 3+)</p><p>Category 2 families*: £315 (adults), £150 (children aged 3+)</p><p>Category 3 families*: £275 (adults), £130 (children aged 3+)</p><p>Children under 3 are free</p></Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/1-person-cross.png" alt="carries a small cross" title="carries a small cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/1-footprint.png" alt="small amount of walking" title="small amount of walking" /></BadgeRound>
                <BadgeRound><BadgeImage src="/ecumenical.png" alt="ecumenical liturgy" title="ecumenical liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/0+.jpg" alt="all ages welcome" title="all ages welcome" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/5-days.jpg" alt="5 days of walking" title="5 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>Wells is a group for families bringing everyone together in fellowship. Based in Wells-next-the-Sea, we walk every day covering distances suitable for young children and three-wheel buggies. The rest of our days are filled with other activities including craft, the beach, swimming, the steam train, and Easter activities with the local Parish over the road. Our liturgy caters for everyone from the smallest children to adults – not always in the same service! We enjoy many things you may expect from walking other parts of Pilgrim Cross. These include, but are not limited to: the beach, local countryside, cake, beer, cheese and whisky. <b>In 2022:</b> We are hoping for the same as previous years: walking, chatting, playing, praying and worshipping together.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfjRJvSdPyYGiztFQZcjt6lToqSBs5m0xthuHgnWv6Y4v0zSA/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/peg-square.jpg" alt="man wearing a hat with a cross pinned to it" />
            </ImageContainer>
            <LegText>
              <LegTitle>Peg</LegTitle>
              <Subheading><p>The 'activity' leg</p><p>Starting on: Sunday 10th April</p><p>Cost:</p><p> Category 1 families*: £365 (adults), £170 (children aged 4-16)</p><p>Category 2 families*: £320 (adults), £140 (children aged 4-16)</p><p>Category 3 families*: £280 (adults), £120 (children aged 4-16)</p><p>Children under 4 are free</p></Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/1-person-cross.png" alt="carries a small cross" title="carries a small cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/1-footprint.png" alt="small amount of walking" title="small amount of walking" /></BadgeRound>
                <BadgeRound><BadgeImage src="/pope-hat.png" alt="mostly Catholic liturgy" title="mostly Catholic liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/0+.jpg" alt="all ages welcome" title="all ages welcome" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/5-days.jpg" alt="5 days of walking" title="5 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>The oldest family leg, Peg contains all the elements of a pilgrimage with a twist. Our cross, walking distance, accommodation and liturgy are all based around the family and suitable for children of all ages. We spend our time doing a range of activities including crafts, egg rolling and making an Easter garden. The emphasis is about community. We walk, pray, eat, play and talk together, meeting old friends and making new ones. It’s a great way for children and parents to commemorate Holy Week and celebrate Easter. <b>In 2022:</b> It's business as usual for Peg this year, we're delighted to be returning to an in-person pilgrimage.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfjRJvSdPyYGiztFQZcjt6lToqSBs5m0xthuHgnWv6Y4v0zSA/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <LegContainer>
            <ImageContainer>
              <TopImage src="/wensum-square.jpg" alt="a group of teenagers smiling" />
            </ImageContainer>
            <LegText>
              <LegTitle>Wensum</LegTitle>
              <Subheading><p>The 'awesome' leg</p><p>Starting on: Sunday 10th April</p><p> Cost:</p><p> Category 1 families*: £150 (adults), £75 (children aged 12+)</p><p>Category 2 families*: £105 (adults), £45 (children aged 12+)</p><p>Category 3 families*: £65 (adults), £25 (children aged 12+)</p></Subheading>
              <BadgeContainer>
                <BadgeSquare><BadgeImage src="/1-person-cross.png" alt="carries a small cross" title="carries a small cross" /></BadgeSquare>
                <BadgeRound><BadgeImage src="/1-footprint.png" alt="small amount of walking" title="small amount of walking" /></BadgeRound>
                <BadgeRound><BadgeImage src="/pope-hat.png" alt="mostly Catholic liturgy" title="mostly Catholic liturgy" /></BadgeRound>
                <BadgeRound><BadgeImage src="/12+.jpg" alt="for secondary school children" title="for secondary school children" /></BadgeRound>
                <BadgeSquare><BadgeImage src="/5-days.jpg" alt="5 days of walking" title="5 days of walking" /></BadgeSquare>
              </BadgeContainer>
              <LegBio>We're a group of families with secondary school age children: year 8 and upwards. We're a scaled down version of a Pilgrim Cross adult leg with walking, liturgy, music, humour, discussion, camaraderie, church hall floors and, most importantly, play parks. From pilgrims well-versed in the pilgrimage and their children, to new families who want to join the community, Wensum welcomes all! Wensum is a chance for teenagers to spend time together away from the usual distractions of life and for their parents/guardians to have some downtime. Cross generational friendships are formed which give a greater understanding of other viewpoints. It's a chance for adults to behave like teenagers and teenagers to be treated like adults. Our liturgy is created by the teenagers, home made, thought provoking and participatory. <b>In 2022: </b>Wensum is staying in two centres during the week, sleeping on church hall floors. We'll be walking 5 or 6 miles each day, praying and socialising and creating community.
              </LegBio>
            </LegText>
          </LegContainer>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfjRJvSdPyYGiztFQZcjt6lToqSBs5m0xthuHgnWv6Y4v0zSA/viewform?usp=sf_link">Sign up now</Button>
          <Spacer size={30}></Spacer>
          <p>*For an explanation of the family categories, see our <Link href='/family-support'>family support</Link> page</p>
        </SectionLeft>
      </TabBody>
    </>
  }
  if (tab === 2) {
    return <>
      <TabBody>
        <SectionLeft width={70}>
          <Aside>
            Born of the pandemic lockdown, X leg draws inspiration from the virtual communities which replaced the usual walking legs of Pilgrim Cross during the restrictions. <br /><br />Having had such creative, inspiring and supportive experiences (and a lot of fun and holiness!) during Holy Week 2020 and 2021, we want to continue to offer that opportunity to be part of the Pilgrim Cross community to those who, for whatever reason, are unable to join the walking legs of the pilgrimage in person. <br /><br />

          </Aside>
          <Spacer size={50}></Spacer>
          <VirtualImageContainer>
            <TopImage src="/virtual-square.jpg" alt="people holding up candles on a video call" />
          </VirtualImageContainer>
          <Spacer size={30}></Spacer>
          <LegTitle>X Leg</LegTitle>
          <Subheading><p>The 'journey of the mind' leg</p><p>Starting on: Friday 8th April</p>Cost: £45 + Netflix subscription (waged)/ £20 + Netflix subscription (low-waged)</Subheading>
          <BadgeContainer>
            <BadgeRound><BadgeImage src="/lgbt.jpg" alt="explicitly welcoming to LGBTQ+" title="explicitly welcoming to LGBTQ+" /></BadgeRound>
            <BadgeRound><BadgeImage src="/no_cross.jpg" alt="does not carry a cross" title="not carrying a cross" /></BadgeRound>
            <BadgeRound><BadgeImage src="/ecumenical.png" alt="ecumenical liturgy" title="ecumenical liturgy" /></BadgeRound>
            <BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of pilgrimage" /></BadgeSquare>
          </BadgeContainer>
          <LegBio>Be a pioneer! Meet and make exciting new friends! Taste pilgrimage from the comfort of your arm chair! If you would like to throw yourself into the Pilgrim Cross pilgrimage but cannot commit to 120 miles of walking across the rugged English countryside then X leg is for you.  We include international pilgrims, pilgrims with limited mobility, pilgrims with caring responsibilities, and pilgrims who have occasional work commitments during the week. We make our liturgy together and we welcome those of different Christian traditions and those who are open to exploring. We positively embrace diversity, use inclusive language in our liturgy and would like contributions from pilgrims which help to make them feel comfortable in the leg.</LegBio>
          <ButtonDiv>
            <Button href="https://docs.google.com/document/d/144RJkvHHXdDCJFi68_Un4NJCCo3KQK6h5uJmX33IlSs/edit">Find out more</Button>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up now</Button>
          </ButtonDiv>
        </SectionLeft>

      </TabBody>
    </>
  }
  if (tab === 3) {
    return <>
      <TabBody>
        <SectionLeft width={100}>
          <KeyContainer>
            <KeySection>
              <KeyElement><BadgeRound><BadgeImage src="/no_cross.jpg" alt="does not carry a cross" title="not carrying a cross" /></BadgeRound></KeyElement>
              <KeyDefinition>not carrying a cross</KeyDefinition>
              <KeyElement><BadgeRound><BadgeImage src="/1-person-cross.png" alt="carries a small cross" title="carries a small cross" /></BadgeRound></KeyElement>
              <KeyDefinition>carries a small cross</KeyDefinition>
              <KeyElement><BadgeSquare><BadgeImage src="/3-person-cross.png" alt="carries a large cross" title="carries a large cross" /></BadgeSquare></KeyElement>
              <KeyDefinition>carries a large cross</KeyDefinition>
            </KeySection>
            <KeySection>
              <KeyElement><BadgeRound><BadgeImage src="/ecumenical.png" alt="ecumenical liturgy" title="ecumenical liturgy" /></BadgeRound></KeyElement>
              <KeyDefinition>ecumenical liturgy</KeyDefinition>
              <KeyElement><BadgeRound><BadgeImage src="/pope-hat.png" alt="mostly Catholic liturgy" title="mostly Catholic liturgy" /></BadgeRound></KeyElement>
              <KeyDefinition>mostly Catholic liturgy</KeyDefinition>
            </KeySection>
            <KeySection>
              <KeyElement><BadgeSquare><BadgeImage src="/1-day.png" alt="1 day of walking" title="1 day of pilgrimage" /></BadgeSquare></KeyElement>
              <KeyDefinition>1 day of pilgrimage</KeyDefinition>
              <KeyElement><BadgeSquare><BadgeImage src="/3-days.png" alt="3 days of walking" title="3 days of pilgrimage" /></BadgeSquare></KeyElement>
              <KeyDefinition>3 days of pilgrimage</KeyDefinition>
              <KeyElement><BadgeSquare><BadgeImage src="/5-days.jpg" alt="5 days of walking" title="5 days of pilgrimage" /></BadgeSquare></KeyElement>
              <KeyDefinition>5 days of pilgrimage</KeyDefinition>
              <KeyElement><BadgeSquare><BadgeImage src="/7-days.png" alt="7 days of walking" title="7 days of pilgrimage" /></BadgeSquare></KeyElement>
              <KeyDefinition>7 days of pilgrimage</KeyDefinition>
            </KeySection>
            <KeySection>
              <KeyElement><BadgeRound><BadgeImage src="/1-footprint.png" alt="small amount of walking" title="small amount of walking" /></BadgeRound></KeyElement>
              <KeyDefinition>small amount of walking</KeyDefinition>
              <KeyElement><BadgeRound><BadgeImage src="/2-footprints.png" alt="moderate amount of walking" title="moderate amount of walking" /></BadgeRound></KeyElement>
              <KeyDefinition>moderate amount of walking</KeyDefinition>
              <KeyElement><BadgeRound><BadgeImage src="/3-footprints.png" alt="large amount of walking" title="large amount of walking" /></BadgeRound></KeyElement>
              <KeyDefinition>large amount of walking</KeyDefinition>
            </KeySection>
            <KeySection>
              <KeyElement><BadgeRound><BadgeImage src="/lgbt.jpg" alt="explicitly welcoming to LGBTQ+" title="explicitly welcoming to LGBTQ+" /></BadgeRound></KeyElement>
              <KeyDefinition>explicitly welcoming to LGBTQ+</KeyDefinition>
            </KeySection>
          </KeyContainer>
        </SectionLeft>

      </TabBody>
    </>
  }
}



export default function Home() {
  const [tab, setTab] = useState(0);
  return <PageBase title="routes">
    <PageContainer>
      <Header content={'Pilgrim Cross 2022: Hands, Face and Holy Space'} src={'/legs-square.jpg'} alt={'pilgrims crossing a field'}></Header>
      <Row>
        <SectionLeft width={70}>
          <Aside>
            <p>Pilgrim Cross is on the road again in 2022! Our twelve groups, or legs, will meet around the country in the week before Easter and make their way to Walsingham to arrive on Good Friday (15th April). We'll spend an amazing weekend celebrating Easter in the ruins of Walsingham Abbey before heading home on Easter Sunday (17th April).</p><br />

            <p>Our groups are making some changes this year to stay covid-safe: walking shorter distances, changing the crosses they carry to reduce contact and putting hygiene measures in place. You can read about what each group is doing below.</p>
            <br />
            <p>Each group has its own character and flavour. Choose the one that appeals to you or sign up for any leg and we'll place you on one.</p>
          </Aside>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfbTbI3Ebl_JASyQTwJ0-pBn2QB166MHWBzJ9ZwXId9sqIO5Q/viewform?usp=sf_link">Sign up as an adult</Button>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfjRJvSdPyYGiztFQZcjt6lToqSBs5m0xthuHgnWv6Y4v0zSA/viewform?usp=sf_link">Sign up as a family</Button>
          <Spacer size={10}></Spacer>

        </SectionLeft>
      </Row>
      <div>
        <Tab onClick={() => setTab(0)} active={tab === 0}>For Adults</Tab>
        <Tab onClick={() => setTab(1)} active={tab === 1}>For Families</Tab>
        <Tab onClick={() => setTab(2)} active={tab === 2}>Virtual</Tab>
        <SymbolsTab onClick={() => setTab(3)} active={tab === 3}>Key of Symbols</SymbolsTab>
      </div>
      <Content tab={tab}></Content>
      <Footer></Footer>
    </PageContainer>
  </PageBase>
}
