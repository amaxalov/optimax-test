import * as React from 'react'
import styled from 'styled-components'

const Root = styled.button`
  width: 200px;
  padding: 13px 20px;
  border-radius: 5px;
  outline: none;
  background: #48a1e6;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({ children, type, onClick }: Props) => (
  <Root type={type} onClick={onClick}>
    {children}
  </Root>
)
