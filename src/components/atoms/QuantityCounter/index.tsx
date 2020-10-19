import * as React from 'react'
import styled from 'styled-components'
import plus from './assets/plus.svg'
import minus from './assets/minus.svg'

const Root = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  height: 26px;
  overflow: hidden;
  border-radius: 5px;
`

const Button = styled.button`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  flex-shrink: 0;
  outline: none;
  height: 100%;
  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

interface Props {
  quantity: number
  increment: () => void
  decrement: () => void
}

export const QuantityCounter: React.FC<Props> = ({ increment, decrement, quantity }: Props) => (
  <Root>
    <Button onClick={increment}>
      <img src={plus} alt='plus' />
    </Button>
    {quantity}
    <Button disabled={quantity <= 1} onClick={decrement}>
      <img src={minus} alt='minus' />
    </Button>
  </Root>
)
