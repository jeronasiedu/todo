import {
  Container,
  FormContainer,
  Intro,
  Input,
} from '../../styles/welcome.styled'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useGlobalContext } from '../../GlobalContext'
import { genConfig } from 'react-nice-avatar'
const Welcome = () => {
  const { setUser } = useGlobalContext()
  const [username, setUsername] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('username', username)
    setUser(username)
    const config = genConfig()
    setUsername('')
    localStorage.setItem('avatarConfig', JSON.stringify(config))
  }
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
  const introVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.3,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  }

  const formVariant = {
    hidden: {
      opacity: 0,
      scale: 2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
    exit: {
      x: 0,
      opacity: 0,
    },
  }
  return (
    <Container
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Intro variants={introVariant}>
        <h1>Hi there</h1>
        <p>let's start simple</p>
      </Intro>
      <FormContainer onSubmit={handleSubmit} variants={formVariant}>
        <Input
          type="text"
          placeholder="username"
          required
          spellCheck="false"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          onSubmit={handleSubmit}
        />
        <Button variant="outlined" size="small" color="warning" type="submit">
          Let's move
        </Button>
      </FormContainer>
    </Container>
  )
}

export default Welcome
