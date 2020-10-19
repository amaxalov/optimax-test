import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/atoms/Container'
import { Header } from '@/components/atoms/Header'
import { Spacer } from '@/components/atoms/Spacer'

const Anchor = styled(Link)`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`

const NotFound: React.FC = () => {
  return (
    <Container>
      <Spacer top='20' bottom='10'>
        <Header>Page not found</Header>
      </Spacer>
      <Anchor to='/'>Go to home →</Anchor>
    </Container>
  )
}

export default NotFound
