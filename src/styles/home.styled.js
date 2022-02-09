import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  min-height: 25rem;
`
export const Up = styled.div`
  text-align: center;
  h3 {
    letter-spacing: 1px;
    span {
      font-weight: ${({ theme }) => theme.font.w_normal};
      color: ${({ theme }) => theme.color.greeting};
    }
  }
  p {
    font-size: 0.9rem;
    font-family: 'poppins', 'sans serif';
  }
`
export const Categories = styled(motion.ul)`
  margin-top: 1rem;
  width: 95%;
  margin-inline: auto;
  padding: 1rem;
  max-height: 23rem;
  height: 100%;
  overflow: auto;
`

export const List = styled(motion.li)`
  width: 80%;
  max-width: 16rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  align-items: center;
  margin-block: 0.5rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.background.secondary};
  @media (min-width: 768px) {
    max-width: 25rem;
    padding: 0.7rem 0.3rem;
    margin-block: 0.7rem;
  }

  cursor: pointer;
`
export const Name = styled.h4``
export const Icon = styled.div``
export const Design = styled.div`
  width: 1.2rem;
  aspect-ratio: 1;
  border-radius: 5px;
  font-size: 0.8rem;
  background: ${({ bg }) => bg};
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5),
    inset 2px -2px 5px rgba(0, 0, 0, 0.2);
  cursor: auto;
`
export const InputContainer = styled.form`
  width: 100%;
  outline: 1px solid ${({ theme }) => theme.background.active};
  display: flex;
  border-radius: 0.2rem;
`
export const Input = styled.input`
  padding: 0.2rem 0.3rem;
  width: 100%;
  font-weight: ${({ theme }) => theme.font.w_light};
  font-size: 1.1rem;
  border-radius: 0.3rem;
  background: none;

  color: ${({ theme }) => theme.color.primary};

  caret-color: inherit;
`

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(18rem, 50vw, 22rem);
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 0.3rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
