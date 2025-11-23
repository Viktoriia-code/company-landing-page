import styled from 'styled-components'
import Banner from './Banner'
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'
import LogoWhite from './LogoWhite'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(270deg, #4b8e82, #86b338 68%);
  color: ${(props) => props.theme.body};

  display: flex;
  /*justify-content: center;
  align-items: center;*/
  flex-direction: column;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.body};
  @media (max-width: 48em) {
    width: 90%;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 100%;
  }
`

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  &>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
      transform: scale(1.2);
    }
  }
`

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 48em) {
    display: none;
  }
`

const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  position: relative;

  &::after{
    content: '';
    height: 2px;
    width: 0;
    background-color: ${(props) => props.theme.body};
    position: absolute;
    left: 0;
    bottom: -4px;
    transition: all 0.3s ease;
  }

  &:hover::after{
    width: 100%;
  }
`

const Bottom = styled.div`
  width: 75%;
  margin:  auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span{
      margin-bottom: 1rem;
    }
  }
`

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
       });
    }
  };
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <LogoWhite />
          <IconList>
            <a href="https://www.facebook.com" aria-label="Facebook" target='_blank' rel='noopener noreferrer'>
              <Facebook fill="#fff" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target='_blank' rel='noopener noreferrer'>
              <Instagram fill="#fff" />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" target='_blank' rel='noopener noreferrer'>
              <Twitter fill="#fff" />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target='_blank' rel='noopener noreferrer'>
              <LinkedIn fill="#fff" />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('about')}>About</Item>
          <Item onClick={() => scrollTo('applications')}>Applications</Item>
          <Item onClick={() => scrollTo('video')}>Video</Item>
          <Item onClick={() => scrollTo('benefits')}>Benefits</Item>
          <Item onClick={() => scrollTo('faq')}>FAQ</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Soil Scout. All rights reserved.
        </span>
        <span>
          Made with &#10084; by <a href="https://www.linkedin.com/in/viktoriia-beloborodova/" target="_blank" rel="noopener noreferrer">Viktoriia Beloborodova</a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer