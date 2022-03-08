import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Dashboard from './pages/Dashboard';
import { ScreenOne } from './components/Dashboard';
import './App.css';
import ToggleContext from './context/toggleContext';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="App">
      <ToggleContext.Provider value={{
        isOpen,
        toggle: () => setIsOpen(!isOpen),
      }}>
        <Routes>
          <Route path="/" element={(<Dashboard />)}>
            <Route index path="" element={(<Navigate to="screenone" />)} />
            <Route path="screenone" element={(<ScreenOne />)} />
          </Route>
        </Routes>
      </ToggleContext.Provider>
    </div>
  );
}

export default App;
