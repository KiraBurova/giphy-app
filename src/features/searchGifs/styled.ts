import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5em;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr min-content;
  grid-gap: 1.5em;
  margin-top: 5em;
`;
