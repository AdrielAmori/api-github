import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';
// import { Login } from './Profile/styles';

const RepositoriesPage = () => {
  const user = {
    login: 'AdrielAmori',
    name: 'Adriel Arruda Amorim',
    avatar_url: 'https://avatars.githubusercontent.com/u/144482242?v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://github.com/adrielamori',
    location: 'Fortaleza',
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
