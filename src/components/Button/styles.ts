import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  height: 55px;
  display: flex;
  background-color: #ffcb05; /* Amarelo Pokémon */
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px #3b4cca; /* Azul Pokémon */
  font-family: 'Press Start 2P', cursive;
  transition: all 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    opacity: 0.95;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px #3b4cca;
  }
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 15px;
`;

export const Icon = styled.img`
  height: 22px;
`;

export const Label = styled.div`
  height: inherit;
  color: #2d2d30;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 10px;
  text-transform: uppercase;
  padding: 0 20px;
  text-align: center;
`;
