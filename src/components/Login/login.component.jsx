import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export const Login = ({ onLogin, onSignUp, onForgotPassword }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you have a function 'authenticate' that handles login logic
    // This function should typically make an API call to your server for authentication
    // and then call onLogin if authentication is successful
    authenticate(username, password)
      .then(() => {
        // Call the onLogin function passed from the parent component
        onLogin(username);
      })
      .catch((error) => {
        // Handle login errors
        console.error("Login failed:", error);
        // Optionally, you can set an error state here to display to the user
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: "white",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": {
          margin: "8px",
          width: "300px",
        },
        "& .MuiButton-root": {
          margin: "8px",
          width: "300px",
        },
        "& .MuiBox-root": {
          margin: "8px",
        },
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
      <Box>
        <span>
          Don't have an account? <br />
          <Button onClick={onSignUp}>Sign up</Button>
        </span>
        <span>
          <Button onClick={onForgotPassword}>Forgot password?</Button>
        </span>
      </Box>
      <Box>
        <Button variant="outlined" onClick={loginWithFacebook}>
          Login with Facebook
        </Button>
        <Button variant="outlined" onClick={loginWithGoogle}>
          Login with Google
        </Button>
      </Box>
    </Box>
  );
};

// Dummy functions for features - you need to implement these
const authenticate = (username, password) => {
  // Simulate authentication, return a promise
  return new Promise((resolve, reject) => {
    // You should replace this with actual authentication logic
    setTimeout(() => {
      if (username === "demo" && password === "demo") {
        resolve();
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000); // Simulating delay for API call
  });
};

const loginWithFacebook = () => {
  // You should implement Facebook login logic here
  console.log("Login with Facebook");
};

const loginWithGoogle = () => {
  // You should implement Google login logic here
  console.log("Login with Google");
};
