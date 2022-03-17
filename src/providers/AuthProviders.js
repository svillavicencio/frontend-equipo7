import React, { useEffect, useState, createContext } from "react";
import { getAccessTokenApi, getRefreshTokenApi, logout } from "../api/authApi";

export const AuthContext = createContext();

export default function AuthProviders(props) {
  const { children } = props;
  const [user, setUser] = useState({
    user: null,
    isLoading: true,
  });
  useEffect(() => {
    checkUserLogin(setUser);
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function checkUserLogin(setUser) {
  const accessToken = getAccessTokenApi();
  if (!accessToken) {
    const refressToken = getRefreshTokenApi();
    if (!refressToken) {
      logout();
      setUser({
        user: null,
        isLoading: false,
      });
    } else {
      getRefreshTokenApi(refressToken);
    }
  } else {
    setUser({
      isLoading: false,
      user: accessToken,
    });
  }
}
