import styled from 'styled-components';

type ContainerProps = {
	showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
	background-color: ${props => props.showBackground ? '#f5f1f1ff' : '#E2E3E3'};
	width: 100px;
	height: 100px;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

type IconProps = {
	opacity?: number;
}

export const Icon = styled.img<IconProps>`
	width: 100%;
	height: 100%;
	object-fit: contain;
	opacity: ${props => props.opacity ?? 1};
`;
