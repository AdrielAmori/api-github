import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

const  RoutesComponent = () => (
    <Router>
      <Routes>
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>

)

export default RoutesComponent;
