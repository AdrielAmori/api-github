import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    box-sizing: border-box;
    grid-template-columns: auto;
  }
`;
