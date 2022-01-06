import { useContext, createContext, useState } from 'react'
const AppContext = createContext()
const GlobalContext = ({ children }) => {
  const [opened, setOpened] = useState(true)
  const [user, setUser] = useState(() => {
    const item = localStorage.getItem('username')
    return item || false
  })
  const [openModal, setOpenModal] = useState(false)
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const [profile, setProfile] = useState(() => {
    const item = localStorage.getItem('profile-image')
    return item || false
  })
  return (
    <AppContext.Provider
      value={{
        opened,
        setOpened,
        user,
        setUser,
        openModal,
        setOpenModal,
        handleCloseModal,
        profile,
        setProfile,
      }}
    >
      {' '}
      {children}
    </AppContext.Provider>
  )
}
export default GlobalContext

export const useGlobalContext = () => {
  return useContext(AppContext)
}
