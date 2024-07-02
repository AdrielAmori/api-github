import React from 'react';

import { Container, Selector, Cleaner } from './styles';

function Filter() {
  const langs = [
    { name: 'Javascript', count: 5, color: '#FCC419' },
    { name: 'Python', count: 3, color: '#23DB42' },
    { name: 'PHP', count: 1, color: '#3498db' },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}

export default Filter;
