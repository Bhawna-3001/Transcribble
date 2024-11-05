// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { UserContextProvider } from './context/UserContext.jsx'

// export const server = 'http://localhost:5000';

// createRoot(document.getElementById('root')).render(
//   <UserContextProvider>
//       <App />
//   </UserContextProvider>
// )

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { MaterialUIControllerProvider } from './pages/dashboard/src/context/context.jsx'; // Assuming 'context' is from the dashboard code
import { UserContextProvider } from './context/UserContext.jsx';

export const server = 'http://localhost:5000';

createRoot(document.getElementById('root')).render(
  <MaterialUIControllerProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </MaterialUIControllerProvider>
);

