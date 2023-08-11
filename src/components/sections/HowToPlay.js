import React from "react";
import styled, { keyframes } from "styled-components";
import Player2 from "../../assets/Anime-Cards/player-2.png";
import Player3 from "../../assets/Anime-Cards/player-3.png";
import Player4 from "../../assets/Anime-Cards/player-4.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 85%;
  height: auto;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
    flex-direction: column;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }
`;
const levitate = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;
const StyledImage = styled.img`
  width: 100%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const LevitatingWrapper = styled.div`
  display: inline-block;
  animation: ${levitate} 2s ease-in-out infinite;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 8px;

  @media (max-width: 64em) {
    gap: 20px;
  }
  @media (max-width: 48em) {
    gap: 20px;
  }
`;
const Text = styled.a`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  text-align: center;
`;

const HowToPlay = () => {
  return (
    <Section id="howtoplay">
      <Title>How to Play</Title>
      <Container>
        <InnerContainer>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <LevitatingWrapper>
            <StyledImage
              src={Player2}
              alt="Your alt text"
              width={300}
              height={300}
            />
          </LevitatingWrapper>
        </InnerContainer>
        <InnerContainer>
          <LevitatingWrapper>
            <StyledImage
              src={Player3}
              alt="Your alt text"
              width={300}
              height={300}
            />
          </LevitatingWrapper>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </InnerContainer>
        <InnerContainer>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <LevitatingWrapper>
            <StyledImage
              src={Player4}
              alt="Your alt text"
              width={300}
              height={300}
            />
          </LevitatingWrapper>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default HowToPlay;
