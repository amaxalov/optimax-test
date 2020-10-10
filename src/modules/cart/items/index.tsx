import * as React from 'react'
import { useDispatch } from 'react-redux'
import { ICartItem } from '@/types/models/cart'
import { ICartState } from '@/core/types/cart'
import { incrementCartItem, decrementCartItem, removeFromCart, setTotalPrice } from '@/core/actions/cart'
import { QuantityCounter } from '@/components/atoms/QuantityCounter'
import trash from './assets/trash.svg'
import * as Styled from './styled'

interface Props {
  items: ICartItem[]
}

interface RootState {
  cart: ICartState
}

export const Items: React.FC<Props> = React.memo(function Items({ items }: Props) {
  const dispatch = useDispatch()
  const remove = React.useCallback((id: number) => {
    dispatch(removeFromCart(id))
    dispatch(setTotalPrice())
  }, [])

  const increment = React.useCallback((id: number) => {
    dispatch(incrementCartItem(id))
    dispatch(setTotalPrice())
  }, [])

  const decrement = React.useCallback((id: number) => {
    dispatch(decrementCartItem(id))
    dispatch(setTotalPrice())
  }, [])

  return (
    <>
      <Styled.Header>
        <Styled.Column>title</Styled.Column>
        <Styled.Column right>price</Styled.Column>
        <Styled.Column right>quantity</Styled.Column>
        <Styled.Column />
      </Styled.Header>
      {items.map((product: ICartItem) => (
        <Styled.Item key={`${product.title}`}>
          <Styled.Column>{product.title}</Styled.Column>
          <Styled.Column right>{product.price} / $</Styled.Column>
          <Styled.Column right quantity>
            <QuantityCounter
              increment={() => increment(product.id)}
              decrement={() => decrement(product.id)}
              quantity={product.quantity}
            />
          </Styled.Column>
          <Styled.Column right>
            <Styled.Trash onClick={() => remove(product.id)}>
              <img src={trash} alt='trash' />
            </Styled.Trash>
          </Styled.Column>
        </Styled.Item>
      ))}
    </>
  )
})
