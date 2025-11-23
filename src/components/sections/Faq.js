// import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'
import Button from '../Button'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  height: auto;
  position: relative;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 4px solid ${(props) => props.theme.body};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`

const Container = styled.div`
  width: 75vw;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  @media (max-width: 64em) {
  gap: unset;
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    &>*:last-child {
    &>*:first-child {
      margin-top: 0;
    }
  }
  }

  
`

const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }
`

const Faq = () => {
  /*const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true
    });

    return () => {
      trigger.kill();
    };

  }, []);*/

  return (
    <Section /*ref={ref}*/ id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="How many sensors per hectare?">
            There is no right or wrong answer, but we will work it out with you.
          </Accordion>
          <Accordion title="How accurate is the sensor and what is the sensing radius?">
            The moisture measurement has ±2 % mean error and a sensing radius of 5 cm.
          </Accordion>
          <Accordion title="How deep should I measure, and why two depths?">
            One sensor gives just one number, but different depths reveal gradients and delays.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="What do I get for the yearly service fee?">
            Soil Scout provides the online Hub, support and data transfer, but there's more to it.
          </Accordion>
          <Accordion title="Who owns the Data?">
            You own data for internal use, but sharing with others than your subcontractors needs our approval.
          </Accordion>
          <Accordion title="How do I translate the Soil Scout Hub into a language of my choosing?">
            You can use Google Chrome to translate the Soil Scout Hub into any language of your choice.
          </Accordion>
        </Box>
      </Container>
      <Button text="Ask your question" link="#" bg={props => props.theme.accentBg} />
    </Section>
  )
}

export default Faq