import React, { useState, useContext } from 'react'
import { Box, Button, Text , Input} from "@chakra-ui/react";
import { AuthContext } from '../context/AuthContextProvider';
import axios from 'axios'


export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
      const { login } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://thankful-flat-pilot.glitch.me/login`,
        {
          username,
          password,
        }
      );
      if (response.data.success) {
        console.log(response.data.token, "response"); //if login get success you will get a token

        const { token } = response.data;

        //This is object destructuring in JavaScript.
        // It extracts the token property from response.data and assigns it to a variable called token

        login(token); //this login function is from authcontext to set the token. this token will use as a AuthToken.
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <Box
      maxW={"sm"}
      mx={"auto"}
      mt={"10"}
      p={5}
      borderWidth={2}
      boxShadow={"md"}
      borderRadius={"5"}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}>
        Login
      </Text>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          mt={"2"}
        />
        <Button
          type="submit"
          value="Login"
          colorPalette={"teal"}
          mx={"auto"}
          mt={"2"}
          width={"full"}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

