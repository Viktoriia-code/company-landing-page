import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


const LogoImg = styled.img`
  height: ${props => props.theme.navHeight};
  width: 20rem;
  height: auto;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 64em) {
    width: 16rem;
  }
`;


const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src="/logo.png" alt="Logo" />
    </Link>
  );
};


export default Logo;