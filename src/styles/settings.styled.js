import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Container = styled(motion.section)`
  font-family: montserrat, ariel;
  padding: 0.3em;
`
export const Up = styled.section`
  padding-inline: 0.3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Toggle = styled.div`
  .container {
    width: 3rem;
    height: 1.5rem;
    position: relative;
    background: ${({ theme }) => theme.background.active};
    border-radius: 0.8rem;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-inline: 0.1rem;
    &::before {
      content: attr(data-text);
      position: absolute;
      bottom: 50%;
      transform: translate(-2rem, 50%);
      opacity: 0;
      letter-spacing: 0.3rem;
      pointer-events: none;
      color: ${({ theme }) => theme.background.active};
      font-size: 0.9rem;
      left: -3rem;
      text-transform: uppercase;
      transition: 0.5s ease;
    }
    &:hover::before {
      transform: translate(0, 50%);
      opacity: 1;
      letter-spacing: 0;
    }
  }

  .circle {
    width: 1.3rem;
    aspect-ratio: 1;
    z-index: 200;
    border-radius: 50%;
    background: ${({ theme }) => theme.background.primary};
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.1), 2px 1px 5px rgba(0, 0, 0, 0.1);
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .circle.light {
    transform: translateX(calc(2.8rem - 1.35rem));
  }
`
export const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`
export const ImageContainer = styled.div`
  border-radius: 50%;
  width: 10rem;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.2);
`
export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`
export const FormContainer = styled.form`
  position: absolute;
  bottom: 0.8rem;
  right: 1rem;
  z-index: 5;
`
export const Input = styled.input`
  display: none;
`
export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`
export const UserName = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.font.w_normal};
`
// MODAL
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(18rem, 50vw, 22rem);
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 0.3rem;
  padding: 0.4rem;
  font-family: 'poppins';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
export const InputContainer = styled.form`
  width: 100%;
  outline: 1px solid ${({ theme }) => theme.background.active};
  display: flex;
  border-radius: 0.2rem;
`
export const ModalInput = styled.input`
  padding: 0.2rem 0.3rem;
  width: 100%;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.font.w_light};
  font-size: 1.1rem;
  border-radius: 0.3rem;
  background: none;

  color: ${({ theme }) => theme.color.primary};

  caret-color: inherit;
`
