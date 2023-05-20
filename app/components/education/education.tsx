import styles from '../../page.module.css'
import { Text,Flex,Box } from '@chakra-ui/react'

const data = [
    {
      title: "BSC IT",
      institute: "Himalayan University",
      year: "2016 - 2018"
    },
    {
        title: "CCIE",
        institute: "Security -- CSCO12337582",
        year: "2013"
      },
      {
        title: "Jetking",
        institute: "Hardware and networking",
        year: "2012"
      },
      {
        title: "HSC",
        institute: "Rizvi College of Arts, Commerce and Science",
        year: "2007 - 2009"
      },
      {
        title: "SSC",
        institute: "B. P. M. High School",
        year: "2001 - 2007"
      },
  ]

const Education = () =>{

    return <Box id="education" className={styles.main2} p={{base: "2rem", md:"6rem"}}>
    <div className={styles.description}>
    <Flex justifyContent="space-between" width="100%">
    <Text>Education</Text>
    <Flex gap={8}>
    <Text as="a" href="#home" cursor="pointer">Top</Text>
    <Text as="a" href="#skills" cursor="pointer">Next</Text>
    </Flex>
    </Flex>
    </div>

    <Flex mt={12} gap={12} flexWrap="wrap" justifyContent="center">
    {data.map((item:any,index:number)=>{
      return  <Box key={index} w={{base:"100%", md:"calc(100%/3)"}} border="1px" p={{base:0,md:"20px"}} borderRadius="10px"
      borderColor="rgba(var(--callout-border-rgb), 0.3)">
      <Text fontSize={20}>{item.title}:</Text>
      <Text mt="16px">{item.institute}</Text>
      <Text mt="16px">year: <strong>{item.year}</strong></Text>
    </Box>
    })}
    </Flex>
  </Box>
}

export default Education