import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';
// import { Description } from './Repositories/Repository/styles';
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

  // Calculo dos filters
  const languages = [
    { name: 'Javascript', count: 2, color: '#FCC419' },
    { name: 'Python', count: 3, color: '#23DB42' },
    { name: 'PHP', count: 2, color: '#3498db' },
    { name: 'Ruby', count: 1, color: '#e74c3c' },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories}/>
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
