import React from "react";

import awsconfig from "./aws-exports";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  Button,
  Heading,
  Image,
  Text,
  useAuthenticator,
  useTheme,
  View,
} from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  signUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          dddd
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
    },
  },
  signUp: {
    first_name: {
      label: "First Name:",
      order: 1,
    },
    last_name: {
      label: "Last Name:",
      order: 2,
    },
    birth_date: {
      label: "Date of Birth:",
      order: 3,
    },
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 4,
    },
    confirm_password: {
      label: "Confirm Password:",
      order: 5,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please:",
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

function App() {
  return (
    <Authenticator formFields={formFields} components={components}>
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}

export default App;
