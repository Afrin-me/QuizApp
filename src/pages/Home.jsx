import React from 'react'
import { Link } from 'react-router-dom'
import { Box,Heading, Text } from '@chakra-ui/react'

export const Home = () => {
  return (
   <Box textAlign={"centre"}
    p={"8"} maxW={"md"} boxShadow={"lg"}
     m="auto" bg="whiteAlpha.500"
   >
    <Heading size="xl" mb={4}>Welcome to Our Quiz App!!!{" "}</Heading>
    <Text>You can test your knowledge and yourself with our Quiz. Please Login to get started.</Text>
    <Link to="/login" >Login</Link>
   </Box>
  )
}

