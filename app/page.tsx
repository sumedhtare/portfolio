'use client';

import { useCallback } from "react"
import Image from 'next/image'
import styles from './page.module.css'
import { useToast,Text,Flex,Box,Button } from '@chakra-ui/react'
import {DiFirebase, DiJavascript, DiNodejsSmall, DiPython, DiReact} from "react-icons/di";
import {TbBrandTypescript} from "react-icons/tb"
import Projects from "./components/projects/projects"
import Education from "./components/education/education"
import Skills from "./components/skills/skills"
import Links from "./components/links/links"
const emailToast = 'emailToast'

const Home = () => {
  const toast = useToast();

  const handleEmail = useCallback(() => {
    navigator.clipboard.writeText("sumedh.tare@gmail.com")
    if (!toast.isActive(emailToast)) {
      toast({
        id: emailToast,
        title: 'Email copied to clipboard',
        status: 'success',
        duration: 2000,
        position: 'top'
      })
    }
  }, [toast])

  const getYear=()=>{
    const myDate = new Date();
    const year = myDate.getFullYear();
    return year - 2015
  }

  return (
        <main>
    <Box className={styles.main} id="home">
      <div className={styles.description}>
        <Box onClick={handleEmail} cursor="pointer">
          <p  >
            Email:&nbsp;
            <code className={styles.code}>sumedh.tare@gmail.com</code>
          </p>
        </Box>
        <Flex gap={4}>
            <DiJavascript size={32}/>
            <DiReact size={32}/>
            <TbBrandTypescript size={32} />
            <DiNodejsSmall size={32}/>
            <DiFirebase size={32}/>
            <DiPython size={32}/>
        </Flex>
      </div>

      <div className={styles.center}>
        <div>
          <Text fontSize={30}>
            Sumedh Tare
          </Text>
          <Text pl={{base: 0, md: 130}}>
            Fullstack developer
          </Text>

          <Text pl={{base: 0, md: 130}}>
            Exp: {getYear()}<sup className={styles.superscript}>+</sup> years
          </Text>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="#projects"
          className={styles.card}
        >
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>View my freelancing projects</p>
        </a>

        <a
          href="#education"
          className={styles.card}
        >
          <h2>
            Education <span>-&gt;</span>
          </h2>
          <p>completed my graduation in 2018</p>
        </a>

        <a
          href="#skills"
          className={styles.card}
        >
          <h2>
            Skills <span>-&gt;</span>
          </h2>
          <p>Explore my skills</p>
        </a>

        <a
          href="#links"
          className={styles.card}
          
        >
          <h2>
            Links <span>-&gt;</span>
          </h2>
          <p>
            Github, Linkedin, Twitter, Discord.
          </p>
        </a>
      </div>

      </Box>

      <Projects/>

      <Education/>

      <Skills />

      <Links />

    </main>
  )
}

export default Home