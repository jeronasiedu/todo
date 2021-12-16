import styled from 'styled-components'
import { motion } from 'framer-motion'
export const SideBar = styled(motion.div)`
  flex: 2;
  max-width: 12rem;
  background: ${({ theme }) => theme.background.secondary};
  height: 100%;
  padding: 0.5rem;
`
export const List = styled.li`
  padding: 0.3rem;
  &:hover {
    background: #3e3e51;
    cursor: pointer;
    border-radius: 3px;
  }
`
export const ListContainer = styled.ul``
