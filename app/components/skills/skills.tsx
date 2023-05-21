import styles from '../../page.module.css'
import { Text,Flex,Box, Center } from '@chakra-ui/react'
import {DiFirebase, DiJavascript, DiNodejsSmall, DiPython, DiReact} from "react-icons/di";
import {TbBrandTypescript} from "react-icons/tb"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
const size = 50
const data = [
    {
      title: "JavaScript",
      exp: 5,
      icon: <DiJavascript size={size}/>
    },
    {
        title: "React",
        exp: 4,
        icon: <DiReact size={size}/>
      },
      {
        title: "ReactNative",
        exp: 4,
        icon: <DiReact size={size}/>
      },
      {
        title: "TypeScript",
        exp: 4,
        icon: <TbBrandTypescript size={size}/>
      },
      {
        title: "NodeJS",
        exp: 3,
        icon: <DiNodejsSmall size={size}/>
      },
      {
        title: "Python",
        exp: 3,
        icon: <DiPython size={size}/>
      },
      {
        title: "Database",
        exp: 3,
        icon: <DiFirebase size={size}/>
      },
  ]

const Skills = () =>{

    const getStars = (exp:number)=>{
        let x = []
        for(let i=0; i<5; i++){
            if(i<exp){
                x.push(<AiFillStar/>)
            }else{
                x.push(<AiOutlineStar/>)
            }
        }
        return x
    }

    return <Box id="skills" className={styles.main2} p={{base: "2rem", md:"6rem"}}>
    <div className={styles.description}>
    <Flex justifyContent="space-between" width="100%">
    <Text>Skills</Text>
    <Flex gap={8}>
    <Text as="a" href="#home" cursor="pointer">Top</Text>
    <Text as="a" href="#links" cursor="pointer">Next</Text>
    </Flex>
    </Flex>
    </div>

    <Flex mt={12} gap={12} justifyContent="center" flexWrap="wrap">
    {data.map((item:any,index:number)=>{
      return  <Center key={index} flexDirection="column"
      w={{base:"100%", md:"300px"}} border="1px" p={{base:"10px",md:"20px"}} borderRadius="10px"
      borderColor="rgba(var(--callout-border-rgb), 0.3)">
      {item.icon}
      <Text fontSize={16}>{item.title}</Text>
      <Flex mt="10px">
      {getStars(item.exp)}
      </Flex>
    </Center>
    })}
    </Flex>
  </Box>
}

export default Skills