import { NavBar, Left, Right, User } from '../../styles/navbar.styled'
import Avatar from 'react-nice-avatar'
import { Icon } from '../../styles/global.styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext'
import { BiNote } from 'react-icons/bi'
const Navbar = () => {
  const { user, setOpenModal, profile } = useGlobalContext()
  const config = JSON.parse(localStorage.getItem('avatarConfig'))
  const { pathname } = useLocation()
  const handleModal = () => {
    setOpenModal(true)
  }

  const navigate = useNavigate()
  const handleNavigate = () => {
    if (pathname === '/settings') {
      navigate(-1)
    } else {
      navigate('/settings')
    }
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
          {profile ? (
            <img
              src={profile}
              alt="profile"
              style={{
                width: '2.4rem',
                borderRadius: '50%',
                objectFit: 'cover',
                aspectRatio: '1',
                transform: 'translateY(0.2rem)',
                cursor: 'pointer',
              }}
              onClick={handleNavigate}
            />
          ) : (
            <Avatar
              style={{ width: '2.3rem', aspectRatio: '1' }}
              {...config}
              onClick={handleNavigate}
            />
          )}
        </Right>
      )}
    </NavBar>
  )
}

export default Navbar
