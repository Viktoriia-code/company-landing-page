import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import Icon1 from '../../assets/services/benefit-icon-1.png';
import Icon2 from '../../assets/services/benefit-icon-2.png';
import Icon3 from '../../assets/services/benefit-icon-3.png';
import DeviceImage from '../../assets/products/Scout_Sensors_main.png';
import GrassBg from '../../assets/ui/grass.jpg';
import SoilBg from '../../assets/ui/soil.jpg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  position: relative;
`

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Grass = styled.div`
  width: 100%;
  height: 300px;
  background: url(${GrassBg}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    max-width: 70%;
    padding-top: 3rem;
    text-shadow: 1px 1px 6px #000;
    font-size: ${(props) => props.theme.fontxl};

    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontlg};
      font-weight: 600;
      max-width: 90%;
    }
  }
`;

const Soil = styled.div`
  min-height: calc(100vh - 300px);
  width: 100%;
  background: url(${SoilBg});
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 60em) {
    padding: 2rem 0;
  }
`;

const CardsRow = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  text-align: center;
  color: white;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => `rgba(0, 0, 0, 0.3)`};
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 16px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);

  h3 {
    font-size: 1.4rem;
    margin: 1rem 0;
    text-shadow: 1px 1px 6px #000;
    @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
  }

  p {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }

  .btnArea {
    margin-top: auto;
  }

  .img {
    text-shadow: 1px 1px 6px #000;
  }
`;

const FloatingImage = styled.img`
  width: 300px;
  @media (max-width: 60em) {
    display: none;
  }
`;

const Benefits = () => {
  return (
    <Section id="benefits">
      <Grass>
        <h2>
          "We give soil experts the insights and data they need to manage their
          land in the most efficient and effective ways"
        </h2>
      </Grass>

      <Soil>
        <Container>
<CardsRow>
          <Card>
            <img src={Icon1} alt="Irrigation Icon" width="60" />
            <h3>Reduce Costs in Farming</h3>
            <p>Follow the Four-Step Process to Optimize Irrigation!</p>
            <div className="btnArea">
              <Button text="Learn more" bg={props => props.theme.button} />
            </div>
          </Card>

          <Card>
            <img src={Icon2} alt="Irrigation Icon" width="60" />
            <h3>Improve Crop Production</h3>
            <p>Smart Farming Research: How Soil Moisture Affects Crop Yield?</p>
            <div className="btnArea">
              <Button text="Learn more" bg={props => props.theme.button} />
            </div>
          </Card>

          <Card>
            <img src={Icon3} alt="Irrigation Icon" width="60" />
            <h3>Optimize Sports Turf Maintenance</h3>
            <p>Download Data-Driven Sports Turf Whitepaper!</p>
            <div className="btnArea">
              <Button text="Learn more" bg={props => props.theme.button} />
            </div>
          </Card>
        </CardsRow>
        <FloatingImage src={DeviceImage} alt="Soil Scout Sensor" />
        </Container>
        
      </Soil>

    </Section>
  )
}

export default Benefits