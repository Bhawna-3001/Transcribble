import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { MaterialUIControllerProvider } from './pages/dashboard/src/context/context.jsx'; // Assuming 'context' is from the dashboard code
import { UserContextProvider } from './context/UserContext.jsx';
import { ThemeProvider } from '@mui/material';
import theme from './pages/dashboard/src/assets/theme/index.jsx';
export const server = 'http://localhost:5000';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <MaterialUIControllerProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </MaterialUIControllerProvider>
  </ThemeProvider>
);

