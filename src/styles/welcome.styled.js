import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Container = styled(motion.section)`
  display: flex;
  height: 100%;
  min-height: 100%;
  min-height: 30rem;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled(motion.form)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: min(90%, 25rem);
  margin-top: 0.4rem;
  .person-icon {
    position: absolute;
    right: 0;
    top: 5%;
    color: #545472;
    transition: 0.5s ease-out;
  }
`
export const Input = styled(motion.input)`
  padding: 0.4rem;
  padding-right: 1.5rem;
  border-radius: 0.2rem;
  font-size: 1rem;
  width: 100%;
  font-family: 'poppins', 'sans serif';
  background: none;
  outline: 0.09rem solid ${({ theme }) => theme.background.light};
  color: #fff;
  transition: 0.5s ease;
  :focus {
    outline-color: #a4a4de;
  }
  :focus + .person-icon {
    color: #a4a4de;
  }
`
// NEW LOGIN

export const LoginContainer = styled(motion.div)`
  gap: 0.4rem;
  width: 100%;
  display: flex;
  max-width: 32rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  h2 {
    font-weight: ${({ theme }) => theme.font.w_normal};
    letter-spacing: 1px;
  }
  p {
    font-family: 'montserrat', 'sans serif';
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.secondary};
    text-align: center;
    color: #b8b8b8;
    line-height: 1.5;
  }
  .logo {
    width: 4rem;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 0.2rem;
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
`

// BUTTON
export const Button = styled(motion.button)`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  width: 100%;
  /* min-width: 19rem; */
  font-family: 'montserrat', 'sans serif';

  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.primary};
  transition: 0.5s background-color;
  :hover {
    background: #6c6c92;
    outline: none;
  }
  :active {
    transform: scale(0.99);
  }

  background: none;
  outline: 0.09rem solid ${({ theme }) => theme.background.light};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`
