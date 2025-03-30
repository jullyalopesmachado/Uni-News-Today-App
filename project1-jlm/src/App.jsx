import { useState } from 'react'
import WelcomePage from '/src/components/WelcomePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanelOp from '/src/components/AdminPanelOp.jsx';
import AdminPanelUser from '/src/components/AdminPanelUser.jsx';
import ProfilePage from '/src/components/ProfilePage.jsx';

function App() {

  return (
    <Router>
      <Routes>

      <Route path="/" element={<WelcomePage />} /> 

      <Route path="/adminPanelOp" element={<AdminPanelOp />} />
      <Route path="/adminPanelUser" element={<AdminPanelUser />} />
      <Route path="/profilePage" element={<ProfilePage />} />

      </Routes>
    </Router>
  );
}

export default App
