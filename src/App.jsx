import { useState } from 'react'
import './App.css'
import useLocalStorageState from 'use-local-storage-state'
import { Register } from './register'
import { Login } from './login'
import { Navigate, Route, Routes } from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Questionnaire } from './questionnaire'
import { Menu } from './Menu'
import { Logout } from './logout'
import { UserAccount } from './UserAccount'
import { NotFound } from './NotFound'


function App() {
  const [token, setToken] = useLocalStorageState('token');
  const [username, setUsername] = useLocalStorageState('username');

  const setAuth = (username, token) => {
    setUsername(username);
    setToken(token);
  };

  return (
    <>
      <MantineProvider>
        <Routes>
          <Route
            path="/register"
            element={<Register setAuth={setAuth} />}
          />
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login setAuth={setAuth} />}
          />
          <Route
            path="/questionnaire"
            element={!token ? <Navigate to="/login" /> : <Questionnaire username={username} token={token} />}
          />
          <Route
            path="user-account"
            element=
            {!token ? <Navigate to="/login" /> : <Menu><UserAccount username={username} token={token} /></Menu>}
          />
          <Route
            path="logout"
            element={!token ? <Navigate to="/login" /> : <Logout username={username} token={token} setAuth={setAuth} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MantineProvider>

    </>
  )
}

export default App
