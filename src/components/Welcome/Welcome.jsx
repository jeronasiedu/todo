import {
  Container,
  FormContainer,
  LoginContainer,
  Button,
  Input,
} from '../../styles/welcome.styled'
import { useGlobalContext } from '../../GlobalContext'
import { BsPerson } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { genConfig } from 'react-nice-avatar'
import { useState } from 'react'
const Welcome = () => {
  const [username, setUsername] = useState('')
  const { setUser } = useGlobalContext()

  // HANDLE SIGN IN
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('username', username)
    setUser(username)
    const config = genConfig()
    setUsername('')
    localStorage.setItem('avatarConfig', JSON.stringify(config))
  }
  // google sign
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  // ANIMATION FOR FORM VARIANT
  const formVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }
  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }
  return (
    <Container
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LoginContainer variants={formVariant} initial="hidden" animate="visible">
        <motion.div className="logo" variants={childVariant}>
          <img src="/pwa-192x192.png" alt="logo" />
        </motion.div>

        <motion.h2 variants={childVariant}>Hey there!</motion.h2>
        <motion.div className="intro" variants={childVariant}>
          <p>Let's help you take off smoothly</p>
          <p>Create a username to get started.</p>
        </motion.div>
        <FormContainer variants={childVariant} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            required
            spellCheck="false"
            variants={childVariant}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <BsPerson size={22} className="person-icon" />
          <Button variants={childVariant} type="submit" className="outline">
            Continue
          </Button>
        </FormContainer>
      </LoginContainer>
    </Container>
  )
}

export default Welcome
