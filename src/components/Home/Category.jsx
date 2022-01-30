import { List, Name } from '../../styles/home.styled'
import { MdDeleteOutline } from 'react-icons/md'
import { BiChevronsRight } from 'react-icons/bi'
import { Icon } from '../../styles/global.styled'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const Category = ({ name, color, design, deleteCategory, id }) => {
  const navigate = useNavigate()
  const handleNavigation = (e) => {
    if (e.target.classList.contains('delete' || e.target.nodeName === 'path')) {
      return false
    } else {
      navigate(`/category/${id}/${name}`)
    }
  }
  const listVariant = {
    hidden: {
      opacity: 0,
      x: 40,
      rotateY: 120,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
    },
  }
  return (
    <AnimatePresence>
      <List
        onClick={handleNavigation}
        variants={listVariant}
        initial="hidden"
        animate="visible"
      >
        <Icon size="small" className="delete" onClick={deleteCategory}>
          <MdDeleteOutline color={color} className="delete" />
        </Icon>
        <Name>{name}</Name>
        <Icon size="small" onClick={handleNavigation}>
          <BiChevronsRight color={design} />
        </Icon>
      </List>
    </AnimatePresence>
  )
}
export default Category
