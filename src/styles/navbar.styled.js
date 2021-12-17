import styled from 'styled-components'
export const NavBar = styled.div`
  padding: 0.3rem 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.background.secondary};
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  padding-top: ${({ user }) => !user && 0};
  z-index: 3;
`
export const Left = styled.div`
  text-transform: capitalize;
`
export const User = styled.h3`
  font-weight: ${({ theme }) => theme.font.w_normal};
  letter-spacing: 1px;
  margin-left: 0.5rem;
  cursor: pointer;
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-right: 0.5rem;
  margin-top: 0.05rem;
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
  font-family: 'poppins';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
export const InputContainer = styled.form`
  width: 100%;
  outline: 1px solid ${({ theme }) => theme.background.light};
  display: flex;
  border-radius: 0.2rem;
`
export const Input = styled.input`
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
