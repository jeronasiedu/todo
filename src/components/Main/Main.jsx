import { useState, useEffect } from 'react'
import {
  MainContainer,
  Container,
  Header,
  Title,
  Input,
  InputContainer,
  TaskContainer,
  Total,
  NewTasks,
  Status,
} from '../../styles/main.styled'
import { Icon } from '../../styles/global.styled'
import { MdArrowBackIos } from 'react-icons/md'
import { BiNote, BiEdit } from 'react-icons/bi'
import NewTask from './NewTask'
import { useParams, useNavigate } from 'react-router-dom'
import { setItem, getItem } from '../../utils/helpers'
import randomColor from 'randomcolor'
import { v4 } from 'uuid'
import { motion } from 'framer-motion'
import { useTheme } from 'styled-components'
const Main = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editItem, setEditItem] = useState({})
  const [inputColor, setInputColor] = useState('')
  const [completed, setCompleted] = useState([])
  const {
    background: { active },
  } = useTheme()
  const navigate = useNavigate()
  const { name, id } = useParams()
  const handleNavigate = () => {
    navigate(-1)
  }
  const handleAddTodo = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        text,
        date: new Date().toISOString(),
        color: randomColor(),
        completed: false,
        id: v4(),
      },
    ])
    setText('')
  }
  // getting completed todos on app load
  useEffect(() => {
    const items = getItem(`todosCategory-${id}`)
    items && setTodos(items)
    if (items && items.length > 0) {
      const completedOnes = items.filter((item) => {
        return item.completed === true
      })
      setCompleted(completedOnes)
    }
  }, [id])
  // setting completed todos on state change on app load
  useEffect(() => {
    setItem(`todosCategory-${id}`, todos)
    const completedOnes = todos.filter((item) => {
      return item.completed === true
    })
    setCompleted(completedOnes)
  }, [todos, id])
  // getting inputColors from localStorage
  useEffect(() => {
    const color = localStorage.getItem(`design-${id}`)
    setInputColor(color)
  }, [id])
  const handleDelete = (id) => {
    if (isEditing && editItem.id === id) {
      return
    }
    const newItems = todos.filter((item) => item.id !== id)
    setTodos(newItems)
  }
  const handleEdit = (item) => {
    setIsEditing(true)
    setEditItem(item)
  }
  const handleEditTodo = (e) => {
    e.preventDefault()
    const edited = todos.map((item) => {
      if (item.id === editItem.id) {
        item.text = editItem.text
      }
      return item
    })
    setIsEditing(false)
    setTodos(edited)
  }
  const handleCompleted = (item) => {
    if (item.completed === true) {
      const newItems = todos.map((todo) => {
        if (todo.id === item.id) {
          todo.completed = false
        }
        return todo
      })
      setTodos(newItems)
    } else {
      const newItems = todos.map((todo) => {
        if (todo.id === item.id) {
          todo.completed = true
        }
        return todo
      })
      setTodos(newItems)
    }
  }
  const mainContainerVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      x: 100,
      opacity: 0,
    },
  }
  const statusVariant = {
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
  const newTaskVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  }

  return (
    <MainContainer
      variants={mainContainerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container>
        <Header>
          <Icon size="small" onClick={handleNavigate}>
            <MdArrowBackIos />
          </Icon>
          <Title>{name}</Title>
        </Header>
        {isEditing ? (
          <InputContainer onSubmit={handleEditTodo} color={inputColor}>
            <Icon size="small" type="submit">
              <BiEdit color={active} />
            </Icon>
            <Input
              color={inputColor}
              placeholder="edit a task"
              spellCheck="false"
              value={editItem.text}
              onChange={(e) => {
                setEditItem({ ...editItem, text: e.target.value })
              }}
              required
              className="edit"
            />
          </InputContainer>
        ) : (
          <InputContainer onSubmit={handleAddTodo} color={inputColor}>
            <Icon size="small" type="submit">
              <BiNote color={active} />
            </Icon>
            <Input
              color={inputColor}
              placeholder="add a task"
              spellCheck="false"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
              required
            />
          </InputContainer>
        )}
        <TaskContainer>
          {todos.length > 0 && (
            <Status variants={statusVariant} initial="hidden" animate="visible">
              <Total layout>
                tasks -{' '}
                <motion.span className="tasks">{todos.length}</motion.span>
              </Total>
              <Total layout>
                completed -{' '}
                <motion.span layout className="completed">
                  {completed.length}
                </motion.span>
              </Total>
            </Status>
          )}

          <NewTasks
            variants={newTaskVariant}
            initial="hidden"
            animate="visible"
          >
            {todos.map((item, key) => {
              return (
                <NewTask
                  key={key}
                  {...item}
                  handleDelete={() => {
                    handleDelete(item.id)
                  }}
                  handleEdit={() => {
                    handleEdit(item)
                  }}
                  handleCompleted={() => {
                    handleCompleted(item)
                  }}
                />
              )
            })}
          </NewTasks>
        </TaskContainer>
      </Container>
    </MainContainer>
  )
}

export default Main
