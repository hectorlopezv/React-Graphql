import styled from 'styled-components'
import { Link as LinkF } from '@reach/router'
import { fadeIn } from '../styles/animation'

export const Nav = styled.nav`
 align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkF)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    text-decoration:none;
    &[aria-current]{
      color: #000;
      &:after{
        ${fadeIn({ time: '0.5s' })};
        content: '·';
        position: absolute;
        bottom: 0;
        font-size: 34px;
        line-height: 20px;
      }
    }

`
