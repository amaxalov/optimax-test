import * as React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
`

type Props = {
  children: React.ReactNode
}

export const Container: React.FC = ({ children }: Props) => <Root>{children}</Root>
