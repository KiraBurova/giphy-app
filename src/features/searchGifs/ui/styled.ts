import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 0 5em 5em 5em;
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

export const StyledLink = styled(Link)`
  color: var(--main-dark);
  text-decoration: none;
`;

export const StyledForm = styled.form``;
