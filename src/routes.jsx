import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

export default function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/repositories" element={<RepositoriesPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
