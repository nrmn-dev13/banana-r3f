import styled, { keyframes } from 'styled-components'

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #ffd863;
  animation: ${fade} 4s normal forwards ease-in-out;
`

export const Container = styled.div`
  font-family: 'NTR', sans-serif;
  font-size: 20px;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Cormorant SC', serif;
    font-weight: 400;
    font-size: min(18vw, 6em);
    line-height: 0.85em;
  }
`

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
`

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 16px;
  right: 16px;
  width: calc(100% - 32px);
  max-width: 100%;
  & .social-link {
    margin: 0 5px 0 0;
    &:first-child {
      margin-left: 5px;
    }
    &:last-child {
      margin: 0;
    }
  }
`

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #252525;
    margin-bottom: 6px;
  }
`

export const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`
