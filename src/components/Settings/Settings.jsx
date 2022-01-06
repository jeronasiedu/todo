import {
  Container,
  Up,
  Toggle,
  Middle,
  ImageContainer,
  Image,
  UserDetails,
  Input,
  FormContainer,
  UserName,
  ModalContent,
  ModalInput,
  InputContainer,
} from '../../styles/settings.styled'
import { Icon } from '../../styles/global.styled'
import { useNavigate } from 'react-router-dom'
import { Modal } from '@mui/material'
import { MdArrowBackIos, MdPhotoCamera } from 'react-icons/md'
import { BiCheck, BiUserPin } from 'react-icons/bi'
import { IconButton } from '@mui/material'
import Avatar from 'react-nice-avatar'
import { useGlobalContext } from '../../GlobalContext'
import { motion } from 'framer-motion'
import { useState } from 'react'
const Settings = ({ mode, setMode }) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }

  const handleToggle = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
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
  const config = JSON.parse(localStorage.getItem('avatarConfig'))
  const { profile, setProfile, user, setUser } = useGlobalContext()
  const handleProfileChange = (e) => {
    const image = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.addEventListener('load', () => {
      localStorage.setItem('profile-image', reader.result)
      setProfile(reader.result)
    })
  }

  const [username, setUsername] = useState(user)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const modalVariant = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  const handleChangeName = (e) => {
    e.preventDefault()
    localStorage.setItem('username', username)
    setUser(username)
    handleClose()
  }
  return (
    <Container
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Up>
        <Icon size="small" onClick={handleNavigate}>
          <MdArrowBackIos />
        </Icon>
        <Toggle>
          <div
            className="container"
            onClick={handleToggle}
            aria-label="toggle"
            aria-pressed="true"
            data-text={`
              ${mode === 'dark' ? 'Dark' : 'Light'}
            `}
          >
            <div className={`circle ${mode === 'light' ? 'light' : ''}`}></div>
          </div>
        </Toggle>
      </Up>
      <Middle>
        <ImageContainer>
          {profile ? (
            <Image src={profile} alt="profile image" />
          ) : (
            <Avatar style={{ width: '100%', aspectRatio: '1' }} {...config} />
          )}

          <FormContainer>
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleProfileChange}
              />
              <IconButton
                color="error"
                aria-label="upload picture"
                component="span"
              >
                <MdPhotoCamera />
              </IconButton>
            </label>
          </FormContainer>
        </ImageContainer>
        <UserDetails
          onClick={() => {
            setOpen(true)
          }}
        >
          <UserName>{user}</UserName>
          <Icon>
            <BiUserPin />
          </Icon>
        </UserDetails>
      </Middle>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        component={motion.div}
        variants={modalVariant}
        initial="hidden"
        animate="visible"
      >
        <ModalContent>
          <h4 id="modal-title">Change username</h4>
          <InputContainer id="modal-description" onSubmit={handleChangeName}>
            <ModalInput
              type="text"
              spellCheck="false"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              required
              autoFocus
            />
            <Icon type="submit">
              <BiCheck />
            </Icon>
          </InputContainer>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Settings
