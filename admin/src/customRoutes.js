import React from 'react';
import { Route } from 'react-router-dom';
import AdminSetting from './pages/ConfigPage';

export default [
  <Route exact path="/configuration" render={() => <AdminSetting />} />
]
