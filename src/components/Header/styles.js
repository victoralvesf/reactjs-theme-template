import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: ${props => props.theme.colors.headerText};
`;