import { useState } from 'react'
import {
  NavBar,
  Left,
  Right,
  User,
  ModalContent,
  InputContainer,
  Input,
} from '../../styles/navbar.styled'
import Avatar from 'react-nice-avatar'
import { Icon } from '../../styles/global.styled'
import { useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext'
import { Modal } from '@mui/material'
import { BiNote, BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'
const Navbar = () => {
  const { user, setOpenModal, setUser } = useGlobalContext()
  const config = JSON.parse(localStorage.getItem('avatarConfig'))
  const { pathname } = useLocation()
  const handleModal = () => {
    setOpenModal(true)
  }
  const [name, setName] = useState(user)
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
    localStorage.setItem('username', name)
    setUser(name)
    handleClose()
    setName('')
  }
  return (
    <NavBar>
      <Left>
        <User
          onClick={() => {
            setOpen(true)
          }}
        >
          {user}
        </User>
      </Left>
      {user && (
        <Right>
          {pathname === '/' && (
            <Icon aria-label="add" onClick={handleModal}>
              <BiNote />
            </Icon>
          )}
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
              <InputContainer
                id="modal-description"
                onSubmit={handleChangeName}
              >
                <Input
                  type="text"
                  spellCheck="false"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
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
          <Avatar style={{ width: '2.3rem', aspectRatio: '1' }} {...config} />
        </Right>
      )}
    </NavBar>
  )
}

export default Navbar
