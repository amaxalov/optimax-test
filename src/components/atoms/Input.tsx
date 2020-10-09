import * as React from 'react'
import styled from 'styled-components'

const Root = styled.input`
  width: 200px;
  padding: 10px 15px;
  outline: none;
  border: 1px solid silver;
  border-radius: 5px;
`

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => <Root {...props} />
