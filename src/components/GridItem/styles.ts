import styled, { css } from 'styled-components';

type ContainerProps = {
	shown: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  perspective: 1000px;
`;

export const Inner = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  ${({ shown }) =>
		shown
			? css`
          transform: rotateY(180deg);
        `
			: css`
          transform: rotateY(0deg);
        `}
`;

export const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Front = styled(Face)`
  background-color: #2e2e2e;
`;

export const Back = styled(Face)`
  background-color: #cbd0faff;
  transform: rotateY(180deg);
`;

type IconProps = {
	opacity?: number;
};

export const Icon = styled.img<IconProps>`
  width: 80%;
  height: 80%;
  object-fit: contain;
  opacity: ${(props) => props.opacity ?? 1};
`;
