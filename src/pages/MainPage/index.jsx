import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt='API GITHUB' />
      <Title>API Github</Title>
      <Form>
        <Input placeholder='usuário' value={login} onChange={(e) => setLogin(e.target.value)} />
        <Button to={`${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
