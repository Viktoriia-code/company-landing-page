import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding-top: 5rem;
  position: relative;
  @media (max-width: 64em) {
    min-height: unset;
  }
`

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 75%;
    aspect-ratio: 16 / 9;
    border: none;
  }
  
  @media (max-width: 64em) {
    min-height: unset;
    padding: 4rem 0;
    width: 100%;

    iframe {
      width: 90%;
    }
  }
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 4px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
  }
`

const Video = () => {
  return (
    <Section id="video">
      <Title>Watch the Soil Scout story</Title>
      <Container>
        <iframe
          src="https://www.youtube.com/embed/q9Yuq9QcQgk?rel=0&controls=1&autoplay=0&mute=0&start=0"
          title="Soil Scout Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Container>
    </Section>
  )
}

export default Video