import React from 'react';
import { AuthContextProvider } from '../services/context';

import AppRouter from './router';

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
