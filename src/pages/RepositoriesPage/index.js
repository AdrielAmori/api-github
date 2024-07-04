import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

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

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Javascript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Python',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Javascript',
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'PHP',
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Ruby',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'TypeScript',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
