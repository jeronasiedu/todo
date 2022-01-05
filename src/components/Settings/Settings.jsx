import { Container, Up, Toggle } from '../../styles/settings.styled'
import { Icon } from '../../styles/global.styled'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
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

  return (
    <Container>
      <Up>
        <Icon size="small" onClick={handleNavigate}>
          <MdArrowBackIos />
        </Icon>
        <Toggle>
          <div className="container" onClick={handleToggle}>
            <div className={`circle ${mode === 'light' ? 'light' : ''}`}></div>
          </div>
        </Toggle>
      </Up>
    </Container>
  )
}

export default Settings
