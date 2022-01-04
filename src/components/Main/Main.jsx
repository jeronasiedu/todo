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
const Main = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editItem, setEditItem] = useState({})
  const [completed, setCompleted] = useState([])
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
  useEffect(() => {
    setItem(`todosCategory-${id}`, todos)
    const completedOnes = todos.filter((item) => {
      return item.completed === true
    })
    setCompleted(completedOnes)
  }, [todos, id])
  const handleDelete = (id) => {
    const newItems = todos.filter((item) => item.id !== id)
    setTodos(newItems)
  }
  const handleEdit = (item) => {
    setEditItem(item)
    setIsEditing(true)
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
          <InputContainer onSubmit={handleEditTodo}>
            <Icon size="small" type="submit">
              <BiEdit color="violet" />
            </Icon>
            <Input
              placeholder="edit a task"
              spellCheck="false"
              autoFocus
              value={editItem.text}
              onChange={(e) => {
                setEditItem({ ...editItem, text: e.target.value })
              }}
              required
            />
          </InputContainer>
        ) : (
          <InputContainer onSubmit={handleAddTodo}>
            <Icon size="small" type="submit">
              <BiNote color="violet" />
            </Icon>
            <Input
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
              <Total>
                tasks - <span className="tasks">{todos.length}</span>
              </Total>
              <Total>
                completed -{' '}
                <span className="completed">{completed.length}</span>
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
