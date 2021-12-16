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
import { AnimatePresence, motion } from 'framer-motion'
import { parseISO, formatRelative } from 'date-fns'
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
        delay: 0.6,
      },
    },
  }
  const handleCheck = (e) => {
    setChecked(e.target.checked)
    handleCompleted()
  }
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
                <BiEdit color="violet" />
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
                {formatRelative(parseISO(date), new window.Date())}
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
