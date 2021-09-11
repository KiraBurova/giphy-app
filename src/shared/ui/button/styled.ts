import styled from 'styled-components';

export const Base = styled.button`
  font-size: 1rem;
  padding: 0.5em 1em;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--accent);
  color: var(--main-light);
  cursor: pointer;
  transition: background-color var(--transition);

  &:hover {
    background-color: var(--darken-accent);
  }
`;
