import React, { useState, useEffect, createContext } from 'react';
import { getAuthToken } from '../auth';
import { getProfile } from '../apiv1/user';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const authToken = getAuthToken();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (authToken) {
      const getProfileAsync = async () => {
        const { status, data } = await getProfile();
        if (status === 200) {
          setAuthenticated(true);
          setUser(data);
        }
      };
      getProfileAsync();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
