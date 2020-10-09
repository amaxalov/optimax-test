import * as React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  readonly align?: 'auto' | 'left' | 'right' | 'center'
}

const Root = styled.h1<HeaderProps>`
  margin: 10px 0;
  font-size: 32px;
  text-align: ${(props) => props.align};
`

interface Props extends HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<Props> = ({ children, align = 'left' }: Props) => <Root align={align}>{children}</Root>

Header.defaultProps = {
  align: 'left',
} as Props

export { Header }
