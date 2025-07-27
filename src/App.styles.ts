import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(145deg, #1a1a1d, #111);
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    min-height: 100vh;

    background-repeat: repeat;
    background-size: 180px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  padding: 40px 20px;
  gap: 40px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;

  @media (max-width: 750px) {
    margin-bottom: 40px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 30px;
    color: #ffcb05;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 2px 2px 0 #3b4cca;
    text-transform: uppercase;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;


export const LogoLink = styled.a`
  display: block;
  img {
    filter: drop-shadow(0 0 5px #3b4cca);
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 20px 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 750px) {
    margin: 0 10px;
  }
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;
