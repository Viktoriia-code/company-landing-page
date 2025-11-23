import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from '../assets/logo/logo-white.png';


const LogoImg = styled.img`
  height: ${props => props.theme.navHeight};
  width: 18rem;
  height: auto;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;


const LogoWhite = () => {
  return (
    <Link to="/">
      <LogoImg src={LogoImage} alt="Logo" />
    </Link>
  );
};


export default LogoWhite;