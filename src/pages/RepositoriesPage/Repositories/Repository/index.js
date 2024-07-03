import React from 'react';

import { Container, Name, Description, Footer, LinK, Lang } from './styles';

const Repository = () => (
  <Container color='#f1c40f'>
    <Name>Repository Name</Name>
    <Description>Repository Description</Description>
    <Footer color='#f1c40f'>
      <Lang>Repository Lang</Lang>
      <LinK href='https://github.com' target='_blank'>
        Ver
      </LinK>
    </Footer>
  </Container>
);

export default Repository;
