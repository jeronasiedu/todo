import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: 3rem;
  gap: 3rem;
`
export const Intro = styled(motion.div)`
  text-align: center;
  font-family: 'montserrat';
  h1 {
    font-weight: ${({ theme }) => theme.font.w_normal};
    letter-spacing: 1px;
  }
  p {
    font-weight: ${({ theme }) => theme.font.w_light};
  }
`
export const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const Input = styled.input`
  padding: 0.2rem 0.3rem;
  font-family: inherit;
  font-size: 1.1rem;
  border-radius: 0.3rem;
  background: none;
  outline: 1px solid ${({ color }) => color};
  color: ${({ theme }) => theme.color.primary};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.background.active};
  }
  &:focus::placeholder {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  caret-color: inherit;
  ::placeholder {
    padding-left: 0.2rem;
    text-transform: uppercase;
    transition: 0.2s ease;
  }
`
