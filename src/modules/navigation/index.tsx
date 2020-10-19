import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/atoms/Container'
import { Spacer } from '@/components/atoms/Spacer'
import data from './data'

const Wrapper = styled.div`
  background: crimson;
`

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const Navigation: React.FC = React.memo(function Navigation() {
  return (
    <Wrapper>
      <Container>
        <Spacer top='10' bottom='10'>
          <Root>
            {data.map((item) => (
              <StyledLink key={`nav_${item.name}`} to={item.to}>
                {item.name}
              </StyledLink>
            ))}
          </Root>
        </Spacer>
      </Container>
    </Wrapper>
  )
})
