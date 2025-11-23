import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../Button'
import Model from '../Model'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-image: linear-gradient(270deg, #4b8e82, #86b338 68%);

  @media (max-width: 64em) {
    display: flex;
    align-items: center;
  }
`

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
    flex-direction: column-reverse;

    &>*:first-child {
      width: 100%;
      text-align: center;
    }
  }
  z-index: 30;
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 64em) {
    width: 100%;
  }
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  color: ${props => props.theme.body};
  width: 80%;
  align-self: flex-start;

  @media (max-width: 70em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`

const Subtitle = styled.h3`
  font-size: ${props => props.theme.fontlg};
  color: ${props => props.theme.text};
  font-weight: 500;
  width: 80%;
  align-self: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 64em) {
    align-self: center;
    text-align: center;
    width: 90%;
  }
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontmd};
  }
`

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 64em) {
    align-self: center;
  }
      z-index: 30;
`

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    width: 80%;
    margin-bottom: 2rem;
  }
  @media (max-width: 48em) {
    width: 100%;
  }
`

const rotate = keyframes`
100% {
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  position: absolute;
  top: 4rem;
  right: 15%;
  width: 6rem;
  height: 6rem;
  padding: 0.2rem;
  border: 1px solid ${props => props.theme.body};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media (max-width: 64em) {
    left: none;
    right: 2rem;
    bottom: none;
    top: 2rem;
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 48em) {
    width: 5rem;
    height: 5rem;
  }
  z-index: 10;
`

const Circle = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.fontxl};
`

const ModelContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  opacity: 0.6;
`

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>Happi100</Title>
          <Title>First wireless real-time soil oxygen sensor</Title>
          <Subtitle>A game changer for the industry!</Subtitle>
          <ButtonContainer>
            <Button text="Learn More" link="#about" />
          </ButtonContainer>
        </Box>
        <Box>
          <ImageContainer>
            <img src="/products/Soil-Scout-Happi100.png" alt="Happi100 wireless real-time soil oxygen sensor" />
          </ImageContainer>
        </Box>
        <Round>
          <Circle>
            &#x2193;
          </Circle>
          <img src="/rounded-text.png" alt="Explore the new era of soil monitoring" />
        </Round>
      </Container>
      <ModelContainer>
        <Model />
      </ModelContainer>
    </Section>
  )
}

export default Home