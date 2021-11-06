import styled from 'styled-components';

export const Base = styled.div`
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  padding: 0.5em 1em;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  cursor: pointer;
`;
