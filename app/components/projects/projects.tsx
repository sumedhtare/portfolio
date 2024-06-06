import styles from '../../page.module.css'
import { Text, Flex, Box } from '@chakra-ui/react'

const data = [
  {
    title: "Click Hotel",
    description: "Hotel Automation app designed to control Lights, Fan, TV, Music and Air conditioning via mobile app over Wi-Fi.",
    skills: ["React native for mobile app", "Mongo db for database", "MQTT for communication", "Esp8266ex microcontroller for In-board circuit"]
  },
  {
    title: "Optymistix",
    description: "Web & Mobile App designed to collect data (form, images and Videos) from customers and provide full access to that data via Dashboard",
    skills: ["React Js for web app", "React Native for Mobile app", "Firebase Real time database for live event tracking", "Firebase Storage", "Firebase Could messaging for notification"]
  },
  {
    title: "Ssquare Finance",
    description: "Web App used to assign tasks to agents and it’s full access over Dashboard. Mobile App used by agents to receive forms and upload clients information including audio messages, pictures and Geo locations",
    skills: ["React Js for web app", "React Native for Mobile app", "Firebase Real time database for live event tracking", "Firebase Storage", "Firebase Could messaging for notification", "Firebase Firestore"]
  },
  {
    title: "Shop by Profile",
    description: "Ecommerce app designed to deliver content based on filter method used by SBP website and provide recommendation logic",
    skills: ["React Native for Mobile app", "AWS Amplify", "AWS Graph QL", "AWS Dynamo DB"]
  },
  {
    title: "Stader ETH, Polygon, Near",
    description: "A web3-based web application designed to execute smart contracts on the Ethereum/Polygon/Near blockchain, utilizing web3 wallets and Ledger devices.",
    skills:  ["Next JS", "TypeScript", "AWS", "NodeJS"]
  },
  {
    title: "Decentralized, encrypted search engine",
    description: "A web3-based web application utilizing AES encryption and decryption methods to perform searches on a decentralized Elasticsearch engine.",
    skills: ["Next JS", "TypeScript", "AWS", "NodeJS"]
  },
]

const Projects = () => {

  return <Box id="projects" className={styles.main2} p={{base: "2rem", md:"6rem"}}>
    <div className={styles.description}>
      <Flex justifyContent="space-between" width="100%">
        <Text>Projects</Text>
        <Flex gap={8}>
          <Text as="a" href="#home" cursor="pointer">Top</Text>
          <Text as="a" href="#education" cursor="pointer">Next</Text>
        </Flex>
      </Flex>
    </div>

    <Flex mt={12} gap={12} justifyContent="space-evenly" flexWrap="wrap">
    {data.map((item:any,index:number)=>{
      return  <Box key={index} w={{base:"100%", md:"calc(100%/3)"}} border="1px" p={{base:0,md:"20px"}} borderRadius="10px"
      borderColor="rgba(var(--callout-border-rgb), 0.3)">
      <Text fontSize={20}>{item.title}:</Text>
      <Text mt="16px">{item.description}</Text>
      <Text mt="16px" textDecor="underline">Technologies:</Text>
      <Box as="ul" ml="20px">
      {item.skills.map((skill:string)=>{
        return <li key={skill}>{skill}</li>
      })}
      </Box>
    </Box>
    })}
    </Flex>
   

  </Box>
}

export default Projects