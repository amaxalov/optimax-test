import * as React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from '@/components/atoms/Container'
import { Spacer } from '@/components/atoms/Spacer'
import { Header } from '@/components/atoms/Header'
import { ICartState } from '@/core/types/cart'
import { Items } from './items'

const Anchor = styled(Link)`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`

interface RootState {
  cart: ICartState
}

const Cart: React.FC = () => {
  const cart = useSelector((store: RootState) => store.cart)
  if (cart.items.length === 0) {
    return (
      <Container>
        <Spacer top='20' bottom='10'>
          <Header>Cart is empty :(</Header>
        </Spacer>
        <Anchor to='/catalog'>Go to catalog →</Anchor>
      </Container>
    )
  }

  return (
    <Container>
      <Spacer top='20'>
        <Header align='center'>Your cart</Header>
      </Spacer>
      <Spacer top='20' bottom='20'>
        <Items items={cart.items} />
      </Spacer>
      <Spacer top='20'>total price: {cart.totalPrice}</Spacer>
    </Container>
  )
}

export default Cart
