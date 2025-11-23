import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    &>*:last-child {
      width: 80%;
  }

  @media (max-width: 40em) {
    &>*:last-child {
      width: 90%;
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  margin: 0.5rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-self: flex-start;
  display: flex;

  @media (max-width: 64em) {
    width: 100%;
    button {
      margin: 0 auto;
    }
  }
`


const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>
            Welcome to the future of soil monitoring!
          </Title>
          <SubText>
            Soil Scout provides the most advanced fully buried underground wireless soil sensor and monitoring solution for professionals in Agriculture, Golf and Sports turf maintenance.
          </SubText>
          <SubText>
            Several golf courses and sports fields worldwide, including such iconic venues as the Wembley Stadium and Philadelphia Phillies, use Soil Scout to maintain their turf in tip-top shape while reducing maintenance costs and water consumption.
          </SubText>
          <SubText>
            Farmers and agriculture professionals around the world use Soil Scout to understand their fields, optimize soil conditions for better growth and improve crop production, also reducing operational costs and water consumption.
          </SubText>
          <ButtonContainer>
            <Button text="Join our Twitter" link="https://twitter.com" />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About