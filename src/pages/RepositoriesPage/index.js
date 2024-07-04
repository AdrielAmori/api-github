import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Javascript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Python',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Javascript',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'PHP',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'Ruby',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://github.com',
      language: 'TypeScript',
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
