import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";

import awsconfig from "../../aws-exports";
import { Amplify } from "aws-amplify";
import { signOut, signIn, getCurrentUser } from "aws-amplify/auth";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const authenticateUser = useCallback(async () => {
    setLoading(true);

    try {
      const currentUserData = await getCurrentUser();
      if (!currentUserData) return destroyAuth();
      setUser(currentUserData);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err);
      destroyAuth();
    }

    setLoading(false);
  }, []);

  const userLogin = async (username, password) => {
    setLoading(true);

    let loginResponse = null;

    await signIn({
      username,
      password,
    })
      .then((res) => {
        loginResponse = {
          status: "success",
          data: { ...res },
        };
      })
      .catch((err) => {
        loginResponse = {
          status: "failed",
          data: err,
        };
      })
      .finally(() => {
        authenticateUser();
        setLoading(false);
      });
    return loginResponse;
  };

  const userLogout = async () => {
    setLoading(true);
    try {
      await signOut({ global: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
    authenticateUser();
    setLoading(false);
  };

  const destroyAuth = () => {
    setIsAuthenticated(false);
    setUser(null);

    setLoading(false);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuthenticated,
        user,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

const useAuthentication = () => useContext(AuthContext);

export { useAuthentication };
