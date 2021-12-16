import { NavBar, Left, Right, User } from '../../styles/navbar.styled'
import Avatar from 'react-nice-avatar'
import { Icon } from '../../styles/global.styled'
import { useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext'
import { BiNote } from 'react-icons/bi'
const Navbar = () => {
  const { user, setOpenModal } = useGlobalContext()
  const config = JSON.parse(localStorage.getItem('avatarConfig'))
  const { pathname } = useLocation()
  const handleModal = () => {
    setOpenModal(true)
  }
  return (
    <NavBar>
      <Left>
        <User>{user}</User>
      </Left>
      {user && (
        <Right>
          {pathname === '/' && (
            <Icon aria-label="add" onClick={handleModal}>
              <BiNote />
            </Icon>
          )}

          <Avatar style={{ width: '2.3rem', aspectRatio: '1' }} {...config} />
        </Right>
      )}
    </NavBar>
  )
}

export default Navbar
