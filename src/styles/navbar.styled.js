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
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
`
