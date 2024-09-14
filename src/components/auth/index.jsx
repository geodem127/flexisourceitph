import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import useLogin from "./Login";

import awsconfig from "../../aws-exports";
import { Amplify } from "aws-amplify";
import {
  signOut,
  signIn,
  getCurrentUser,
  fetchAuthSession,
} from "aws-amplify/auth";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  //   const { userData, login, loading: loginLoading } = useLogin();

  const authenticateUser = useCallback(async () => {
    setLoading(true);

    try {
      const currentUserData = await getCurrentUser();
      if (!currentUserData) return destroyAuth();
      setUser(currentUserData);
      setIsAuthenticated(true);
      console.log(
        `currentUserData: ${JSON.stringify(currentUserData, null, 3)}`
      );
    } catch (err) {
      console.log(err);
      destroyAuth();
    }

    setLoading(false);
  }, [isAuthenticated]);

  const getCurrentSession = async () => {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      console.log("accessToken, idToken ", {
        accessToken,
        idToken,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const userLogin = async (username, password) => {
    setLoading(true);
    // try {
    //   const { ...res } = await signIn({
    //     username,
    //     password,
    //   });

    //   console.log("userLogin signInResponse", {
    //     ...res,
    //   });
    // } catch (error) {
    //   console.log("error signing in", error);
    // }

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
    try {
      await signOut({ global: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
    authenticateUser();
    //   destroyAuth();
  };

  const destroyAuth = () => {
    setIsAuthenticated(false);
    setUser(null);

    setLoading(false);
  };

  //   const currentAuthenticatedUser = async () => {
  //     try {
  //       const { username, userId, signInDetails } = await getCurrentUser();
  //       console.log(`The username: ${username}`);
  //       console.log(`The userId: ${userId}`);
  //       console.log(`The signInDetails: ${signInDetails}`);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     if (loginLoading) return;

  //     authenticateUser();
  //   }, [loginLoading, authenticateUser]);

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuthenticated,
        // user,
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
