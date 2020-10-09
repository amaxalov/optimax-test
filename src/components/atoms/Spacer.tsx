import * as React from 'react'
import styled, { css } from 'styled-components'

interface HeaderProps {
  readonly top?: string
  readonly left?: string
  readonly right?: string
  readonly bottom?: string
}

const Root = styled.div<HeaderProps>`
  display: block;
  ${({ top }) =>
    top &&
    css`
      padding-top: ${top}px;
    `}
  ${({ left }) =>
    left &&
    css`
      padding-left: ${left}px;
    `};
  ${({ right }) =>
    right &&
    css`
      padding-right: ${right}px;
    `};
  ${({ bottom }) =>
    bottom &&
    css`
      padding-bottom: ${bottom}px;
    `};
`

interface Props extends HeaderProps {
  children: React.ReactNode
}

const Spacer: React.FC<Props> = ({ children, top, left, bottom, right }: Props) => (
  <Root top={top} left={left} bottom={bottom} right={right}>
    {children}
  </Root>
)

Spacer.defaultProps = {
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
} as Props

export { Spacer }
