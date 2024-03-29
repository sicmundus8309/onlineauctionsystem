import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/Authpage/AuthPage';
import Dashboard from './pages/Dashboard';
import Contact from "./pages/Contact";
import ProtectedRoutes from "./ProtectedRoutes";
import Sidebar from './components/Sidebar/Sidebar';
import Account from './pages/Account';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/signup" element={<AuthPage />} />
          
          <Route
            path="/"
            element={
              <ProtectedRoutes>
              <>
              <Sidebar>
              <Dashboard />
              </Sidebar>
              </>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoutes>
              <>
              <Sidebar>
              <Account />
              </Sidebar>
              </>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoutes>
              <>
              <Sidebar>
              <Cart />
              </Sidebar>
              </>
              </ProtectedRoutes>
            }
          />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
