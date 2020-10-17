import React, { useState, useEffect, createContext } from 'react';
import { getAuthToken, setAuthToken, clearAuthToken } from '../auth';
import { getProfile, genTfa } from '../apiv1/user';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const authToken = getAuthToken();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const getProfileAsync = async () => {
    const { status, data } = await getProfile();
    if (status === 200) {
      setAuthenticated(true);
      setUser(data);
    }
  };
  const login = token => {
    setAuthToken(token);
    getProfileAsync();
  };
  const logout = () => {
    clearAuthToken();
    setAuthenticated(false);
    setUser({});
  };
  useEffect(() => {
    if (authToken) {
      getProfileAsync();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
