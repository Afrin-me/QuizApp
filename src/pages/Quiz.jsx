import { Box, Container, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import QuizQuestions from './QuizQuestions'
import axios from 'axios'

export const Quiz = () => {

  const [questions, setQuestions] = useState([])
  const [answer, setAnswer] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`https://thankful-flat-pilot.glitch.me/api/questions`)
    .then((res)=>setQuestions(res.data.questions))
    .catch((error)=>setError('error fetching in questions'))
    .finally((setLoading(false)))
  }, [])
  return (
    <Container centerContent maxW={"container.md"} py={10}>
      <Box p={5} borderWidth={2} boxShadow={"lg"} w="lg" textAlign={"center"}>
        <Heading>Start your Quiz!!!</Heading>
        {loading ? (
          <p>Loading...</p>
        ) : questions.length > 0 ? (
          questions.map((ele) => <QuizQuestions ele={ele} key={ele.id} />)
        ) : (
          <p>No questions available.</p>
        )}
      </Box>
    </Container>
  );
}

