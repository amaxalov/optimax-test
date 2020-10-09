import * as React from 'react'
import { Container } from '@/components/atoms/Container'
import { Header } from '@/components/atoms/Header'
import { Spacer } from '@/components/atoms/Spacer'

const Main: React.FC = () => {
  return (
    <Container>
      <Spacer top='20'>
        <Header align='center'>Main page</Header>
      </Spacer>
    </Container>
  )
}

export default Main
