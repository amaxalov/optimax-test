import React from 'react'
import { render, screen, fireEvent } from '@/utils/test-utils'
import { Items } from './index'

describe('Items', () => {
  it('Render empty list', () => {
    const { container } = render(<Items items={[]} />)

    expect(container.firstChild).toBeNull()
  })

  describe('Render with value', () => {
    const initialState = [
      {
        id: 1,
        title: 'Samsung',
        price: 21000,
      },
      {
        id: 2,
        title: 'Apple',
        price: 50000,
      },
    ]

    it('item expect', () => {
      render(<Items items={initialState} />)
      expect(screen.getByText(/Samsung/i)).toBeInTheDocument()
    })

    it('success add to cart', () => {
      render(<Items items={initialState} />, {})
      fireEvent.click(screen.getAllByText(/Add to Cart/i)[0])
      expect(screen.getByText(/Added/i)).toBeInTheDocument()
    })
  })
})
