import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 20rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
  height: 20rem;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 48em) {
    height: 15rem;
  }
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  width: 35%;
  z-index: 10;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
  @media (max-width: 64em) {
    width: 40%;
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    text-align: center;
    width: 100%;
    padding: 2rem 0;
    font-size: ${(props) => props.theme.fontlg};
  }
`

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`

const GetInTouch = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  outline: none;
  border: none;
  font-size: ${props => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  font-weight: 600;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }
  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${props => props.theme.fontsm};
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src="/products/prototype-banner.png" alt="Banner with the prototype" />
      </ImgContainer>
      <Title>Ready to change<br/>how you manage your soil?</Title>
      <BtnContainer>
        <GetInTouch>Get in touch</GetInTouch>
      </BtnContainer>
    </Section>
  )
}

export default Banner