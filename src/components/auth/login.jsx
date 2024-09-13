import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const useLogin = () => {
  const [loginData, setLoginData] = useState(null);

  const { loading, response, sendRequest } = useAxios();

  const login = (email, password) => {
    sendRequest({
      url: "https://flexisource.com/api",
      options: { email, password },
    });
  };

  useEffect(() => {
    if (loading) return;

    if (response?.status === 200) {
      setLoginData({ isAuthenticated: true, data: response?.data });
    } else {
      setLoginData({ isAuthenticated: false, data: null });
    }
  }, [loading, response]);

  return { loginData, loading, login };
};

export default useLogin;
