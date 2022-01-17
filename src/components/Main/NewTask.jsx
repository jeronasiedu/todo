import { useState } from 'react'
import {
  List,
  Middle,
  Right,
  Left,
  Up,
  Down,
  Date,
} from '../../styles/main.styled'
import { Icon } from '../../styles/global.styled'
import { Checkbox } from '@mui/material/'
import { BiEdit, BiTrash, BiChevronDown } from 'react-icons/bi'
import { MdNotificationAdd } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'styled-components'
import { formatDate } from '../../utils/helpers'
const NewTask = ({
  text,
  date,
  color,
  handleDelete,
  handleEdit,
  handleCompleted,
  completed,
}) => {
  const [expand, setExpand] = useState(false)
  const [checked, setChecked] = useState(completed)
  const handleExpand = () => {
    setExpand(!expand)
  }
  const downVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.3,
        when: 'afterChildren',
      },
    },
  }
  const childVariant = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
      x: -20,
    },
  }
  const listVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  }
  const handleCheck = (e) => {
    setChecked(e.target.checked)
    handleCompleted()
  }
  const formattedDate = formatDate(date)
  const {
    background: { active },
  } = useTheme()
  return (
    <List variants={listVariant} initial="hidden" animate="visible">
      <Left>
        <Checkbox
          value="check"
          checked={checked}
          onChange={handleCheck}
          size="small"
        />
      </Left>
      <Middle>
        <Up className={checked ? 'marked' : ''} bg={color}>
          {text}
        </Up>
        <AnimatePresence>
          {expand && (
            <Down
              variants={downVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Icon
                size="small"
                component={motion.div}
                variants={childVariant}
                onClick={handleEdit}
              >
                <BiEdit color={active} />
              </Icon>
              <Icon size="small" component={motion.div} variants={childVariant}>
                <MdNotificationAdd color={color} />
              </Icon>

              <Icon
                size="small"
                component={motion.div}
                variants={childVariant}
                onClick={handleDelete}
              >
                <BiTrash color="#fc626c" />
              </Icon>
              <Date color={color} variants={childVariant}>
                {formattedDate}
              </Date>
            </Down>
          )}
        </AnimatePresence>
      </Middle>
      <Right onClick={handleExpand} className={expand ? 'rotate' : ''}>
        <Icon size="small">
          <BiChevronDown />
        </Icon>
      </Right>
    </List>
  )
}

export default NewTask
