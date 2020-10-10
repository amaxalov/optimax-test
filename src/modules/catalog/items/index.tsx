import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '@/types/models/catalog'
import { ICartState } from '@/core/types/cart'
import { addToCart, setTotalPrice } from '@/core/actions/cart'
import { Button } from '@/components/atoms/Button'
import * as Styled from './styled'

interface Props {
  items: IProduct[]
}

interface RootState {
  cart: ICartState
}

export const Items: React.FC<Props> = React.memo(function Items({ items }: Props) {
  const dispatch = useDispatch()
  const cartItems = useSelector((store: RootState) => store.cart.items)
  const add = React.useCallback((product: IProduct) => {
    dispatch(addToCart(product))
    dispatch(setTotalPrice())
  }, [])

  if (items.length === 0) return null

  return (
    <>
      <Styled.Header>
        <Styled.Column>title</Styled.Column>
        <Styled.Column right>price</Styled.Column>
      </Styled.Header>
      {items.map((product: IProduct) => (
        <Styled.Item key={`${product.title}`}>
          <Styled.Column>{product.title}</Styled.Column>
          <Styled.Column right>{product.price} / $</Styled.Column>
          <Styled.Column buttonCont right>
            {cartItems.find((i: IProduct) => i.id === product.id) ? (
              'Added'
            ) : (
              <Button onClick={() => add(product)}>Add to Cart</Button>
            )}
          </Styled.Column>
        </Styled.Item>
      ))}
    </>
  )
})
