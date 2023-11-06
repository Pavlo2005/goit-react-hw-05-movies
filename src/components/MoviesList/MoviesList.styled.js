import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(2)};
`;

export const ListItem = styled.li`
  flex-basis: calc(100%);
`;