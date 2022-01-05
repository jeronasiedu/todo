import styled from 'styled-components'
export const Container = styled.section`
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
    background: ${({ theme }) => theme.background.secondary};
    border-radius: 0.8rem;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-inline: 0.1rem;
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
    transform: translateX(calc(2.8rem - 1.3rem));
  }
`
