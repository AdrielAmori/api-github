import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/144482242?v=4' alt='Avatar' />
        <div>
          <Login>devSamurai</Login>
          <Name>Dev Samurai</Name>
        </div>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp;&middot; 10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} /> Dev Samurai
        </Data>
        <Data>
          <MdLocationCity size={20} /> Fortaleza
        </Data>
        <Data>
          <MdLink size={20} />
          <a href='https://github.com/adrielamori'>https://github.com/</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
