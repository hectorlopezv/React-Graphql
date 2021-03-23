import styled from 'styled-components'
import { Link } from '@reach/router'
export const Anchor = styled(Link)`
  display: flex;
  flex-flow: column;
  text-align: center;
  text-decoration: none;
  width: 80px;
  height: 80px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`
