import styled, { keyframes } from 'styled-components'
import { IconButton } from '@mui/material'
export const Container = styled.main`
  background: ${({ theme }) => theme.background.primary};
  max-width: 60rem;
  margin-inline: auto;
  border-radius: 0.2rem;
  overflow: hidden;
  min-height: 90vh;
  @media (max-width: 620px) {
    min-height: 96vh;
  }
`
export const Split = styled.div`
  height: 100%;
`
export const Icon = styled(IconButton)`
  color: ${({ theme }) => theme.color.primary} !important;
`
export const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`
