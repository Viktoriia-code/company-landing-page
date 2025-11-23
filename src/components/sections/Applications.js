import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { Link } from 'react-router-dom'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-image: linear-gradient(125deg, #4b8e82, #86b338);
  overflow: hidden;
  padding-top: 5rem;
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 4px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`

const Container = styled.div`
  width: 80%;
  height: 160vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 90%;
  }
`

const SvgContainer = styled.div`¨
  display: flex;
  justify-content: center;
  align-items: center;
`
const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 64em) {
    width: 90%;
  }

  &>*:nth-of-type(2n+1){
    justify-content: start;
    @media (max-width: 64em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 64em) {
        border-radius: 50px 0 50px 0;
        text-align: left;
        p {
          border-radius: 40px 0 40px 0;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }

  &>*:nth-of-type(2n){
    justify-content: end;
    @media (max-width: 64em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;

      @media (max-width: 64em) {
        border-radius: 50px 0 50px 0;
        text-align: left;
        p {
          border-radius: 40px 0 40px 0;
        }
      }
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
  & > *:first-child {
    height: 70%;
  }
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  @media (max-width: 64em) {
    width: 70%;
  }
`

const Box = styled.div`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
  margin: 0;
  display: flex;
  gap: 1rem;
`

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`

const ApplicationsItem = ({ img, title, subtext, linkText, link, addToRefs }) => {
  return (
      <Item ref={addToRefs}>
          <ItemContainer>
            <Box>
              <img src={img} alt={title} width={80} height={80} />
              <div>
                <SubTitle>{title}</SubTitle>
                <Text>{subtext}</Text>
                <Link to={link}>
                  <Text>
                    {linkText}
                  </Text>
                </Link>
              </div>
            </Box>
          </ItemContainer>
      </Item>
  )
}

const Applications = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },
        {
          y: '-30',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true
          },
        }
      )
    });

    return () => {};
  }, []);

  return (
    <Section id="applications">
      <Title>Applications</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <ApplicationsItem addToRefs={addToRefs} img="services/agriculture-service.png" title="Agriculture" subtext="Understand soil, improve crop production while reducing operational costs and irrigation water use." linkText="‍Learn about wireless soil monitoring in Smart Farming" link="#"></ApplicationsItem>
          <ApplicationsItem addToRefs={addToRefs} img="services/golf-service.png" title="Golf Courses" subtext="Maintain healthy, robust, and smooth fairways and greens while optimizing water consumption." linkText="Read how Golf courses benefit from wireless soil sensors" link="#"></ApplicationsItem>
          <ApplicationsItem addToRefs={addToRefs} img="services/sport-field-service.png" title="Sports Fields" subtext="Provide players and athletes a uniform, safe, and robust grass for a full season." linkText="Learn how to keep better Sports turf with soil monitoring" link="#"></ApplicationsItem>
          <ApplicationsItem addToRefs={addToRefs} img="services/soil-monitoring-service.png" title="Soil Monitoring" subtext="What is soil monitoring, how wireless sensors work, and what are the benefits for you?" linkText="Learn about wireless soil moisture sensors" link="#"></ApplicationsItem>
        </Items>
      </Container>
    </Section>
  )
}

export default Applications