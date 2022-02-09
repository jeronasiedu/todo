import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ModalContent } from './settings.styled'
export const MainContainer = styled(motion.div)`
  height: 100%;
`
export const Container = styled.div`
  margin-inline: auto;
  width: clamp(18rem, 88%, 38rem);
  margin-top: 2rem;
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`
export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.font.w_normal};
`
export const InputContainer = styled.form`
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid ${({ color }) => color || '#ea4fb9'};
  display: flex;
  padding: 0.2rem 0;
  height: 100%;
  padding-right: 0.1em;
`

export const Input = styled.input`
  padding-inline: 0.2em;
  flex: 1;
  background: none;
  color: ${({ theme }) => theme.color.primary};

  font-size: 1rem;
  ::placeholder {
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:focus::placeholder {
    letter-spacing: 1px;
    color: ${({ color }) => color};
    transform: translate(0.2rem, -0.5rem);
    font-size: 0.8rem;
  }
`

export const TaskContainer = styled(motion.div)`
  margin-block: 2rem;
  height: 20rem;
  position: relative;
  padding-right: 0.3rem;
  overflow: auto;

  @media (max-width: 620px) {
    height: 23rem;
  }
`

export const NewTasks = styled(motion.ul)`
  padding: 0.15rem;
`
export const List = styled(motion.li)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.2rem;
  background: ${({ theme }) => theme.background.tertiary};
  margin-block: 0.4rem;
  border-radius: 0.4rem;
`
export const Up = styled.p`
  position: relative;
  transition: 0.5s ease;
  font-family: 'poppins', 'sans serif';

  &.marked {
    color: #797986;
    text-decoration: line-through;
    text-decoration-color: ${({ bg }) => bg};
  }
  @media (max-width: 540px) {
    font-size: 0.9rem;
  }
`
export const Down = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.3em;
  width: 100%;
`
export const Date = styled(motion.p)`
  font-size: 0.8rem;
  color: ${({ color }) => color};
  margin-left: auto;
  @media (max-width: 540px) {
    font-size: 0.7rem;
  }
`
export const Left = styled.div``
export const Middle = styled(motion.div)`
  width: 100%;
`
export const Right = styled.div`
  margin-left: auto;
  align-self: flex-start;
  transition: transform 0.5s ease;
  &.rotate {
    transform: rotate(180deg);
  }
`
export const Status = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Total = styled(motion.p)`
  text-transform: capitalize;
  span.tasks {
    color: ${({ theme }) => theme.color.tasks};
  }
  span.completed {
    color: ${({ theme }) => theme.color.completed};
  }
`
// DATE PICKER
export const DateContent = styled(ModalContent)`
  background: #fff;
  div {
    display: flex;
    gap: 1.2rem;
  }
`
