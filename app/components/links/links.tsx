import styles from '../../page.module.css'
import { Text, Flex, Box, Link, Center } from '@chakra-ui/react'

import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai"
import { HiDocument } from "react-icons/hi"

const size = 50
const data = [
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/sumedh-tare-1841b7191/",
        icon: <AiFillLinkedin size={size} />
    },
    {
        title: "Facebook",
        link: "https://www.facebook.com/sumedh.tare",
        icon: <AiFillFacebook size={size} />
    },
    {
        title: "Github",
        link: "https://github.com/sumedhtare",
        icon: <AiFillGithub size={size} />
    },
    {
        title: "Resume",
        link: "https://drive.google.com/file/d/1qz6PwCUIW2GkVBKzFW9chzuXS6glGgFZ/view?usp=share_link",
        icon: <HiDocument size={size} />
    },
]

const Links = () => {

    return <Box id="links" className={styles.main2} p={{ base: "2rem", md: "6rem" }}>
        <div className={styles.description}>
            <Flex justifyContent="space-between" width="100%">
                <Text>Links</Text>
                <Flex gap={8}>
                    <Text as="a" href="#home" cursor="pointer">Top</Text>
                </Flex>
            </Flex>
        </div>

        <Flex mt={12} gap={12} justifyContent="center" flexDirection="row" flexWrap="wrap">
            {data.map((item: any, index: number) => {
                return <Center key={index}
                    as="a" href={item.link} target="_blank"
                    cursor="pointer"
                    w="100%" border="1px" p={{ base: "10px", md: "20px" }} borderRadius="10px"
                    borderColor="rgba(var(--callout-border-rgb), 0.3)">
                    {item.icon}
                    <Text fontSize={16} ml="10px">{item.title}</Text>
                </Center>
            })}
        </Flex>

        <Box h="10px" />
    </Box>
}

export default Links