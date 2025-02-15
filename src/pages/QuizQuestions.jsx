import React, { useState } from 'react'
import { Box, Container, Text, Stack, Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from "@/components/ui/radio";


const QuizQuestions = (props) => {
    const {ele} = props;
    console.log(props)

    const[selectOpt, setSelectOpt] = useState("")
    const [showResult, setShowResult] = useState(false);
    const [feedback, setFeedback] = useState("")

    const handleselectOpt = (e)=>{
        console.log(e.value)
        setSelectOpt(e.value)

    }
    const handleShow = ()=>{
        setShowResult(!showResult)

        if(!showResult){
            if(ele.answer===selectOpt){
                setFeedback(`correct! The answer is ${ele.answer}`)
            }else{
                setFeedback(`Incorrect! The answer  is ${ele.answer}`);
            }
        }else{
            setFeedback("")
        }

    }
  return (
    <div>
      <Box
        p={6}
        borderWidth={2}
        boxShadow={"lg"}
        w="full"
        bg="whiteAlpha.400"
        gap={2}
      >
        <Text fontSize={"lg"} fontWeight="bold">
          {" "}
          {ele.id} {ele.question}
        </Text>

        <RadioGroup value={selectOpt} onValueChange={handleselectOpt}>
          <Stack gap={4}>
            {ele.options.map((option) => (
              <Box
                key={option}
                p={2}
                bg={
                  showResult
                    ? option === ele.answer
                      ? "green.100"
                      : option === selectOpt
                      ? "red.100"
                      : "white"
                    : "white"
                }
              >
                <Radio value={option} key={option.id}>
                  {option}
                </Radio>
              </Box>
            ))}
          </Stack>
        </RadioGroup>

        <Button onClick={handleShow} colorPalette={"teal"}>
          {showResult ? "Hide Answer" : "Show Answer"}
        </Button>
        {showResult && <Text>{feedback}</Text>}
      </Box>
    </div>
  );
}

export default QuizQuestions

