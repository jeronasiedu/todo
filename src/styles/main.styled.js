import styled from 'styled-components'
import { motion } from 'framer-motion'
export const MainContainer = styled(motion.div)`
  height: 100%;
`
export const Container = styled.div`
  margin-inline: auto;
  width: clamp(18rem, 80%, 38rem);
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
  border-radius: 0.3rem;
  border: 2px solid #1d1d26;
  display: flex;
  padding: 0.2rem 0;
  height: 100%;
`
export const Input = styled.input`
  flex: 1;
  background: none;
  color: ${({ theme }) => theme.color.primary};
  font-family: 'Montserrat';
  font-size: 1rem;
`
export const TaskContainer = styled(motion.div)`
  margin-block: 2rem;
  height: 20rem;
  position: relative;
  overflow: auto;
  font-family: 'Montserrat';
`

export const NewTasks = styled(motion.ul)`
  padding: 0.2rem;
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
  &.marked {
    color: gray;
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
export const Total = styled.p`
  text-transform: capitalize;
  span.tasks {
    color: ${({ theme }) => theme.color.tasks};
  }
  span.completed {
    color: ${({ theme }) => theme.color.completed};
  }
`