import * as React from "react";
import { Admin, Resource, fetchUtils } from 'react-admin';
import Dashboard from './pages/Dashboard';
import authProvider, { getAuthToken} from './provider/authProvider';
import Login from './pages/Login';
import theme from './theme';
import MyLayout from './layout';
import users from './pages/users';
import accounts from './pages/accounts';
import currencies from './pages/currencies';
import admin_users from './pages/admin_users';
import customRoutes from './customRoutes';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = (url, options = {}) => {
    if(!options.headers){
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = getAuthToken();
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/ntquang98/react-admin', httpClient);

const App = () => (
    <Admin
        theme={theme}
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={Login}
        layout={MyLayout}
        customRoutes={customRoutes}
    >
        <Resource {...users} />
        <Resource {...accounts} />
        <Resource {...currencies}/>
        <Resource {...admin_users}/>
    </Admin>
);

export default App;
