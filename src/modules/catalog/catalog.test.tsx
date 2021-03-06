import React from 'react'
import { render, screen, fireEvent } from '@/utils/test-utils'
import Catalog from './index'

describe('Catalog', () => {
  it('Renders the connected app', () => {
    const { container } = render(<Catalog />)

    expect(container.firstChild).toBeNull()
  })

  describe('Render with fetch value', () => {
    const initialState = {
      catalog: {
        isFetched: false,
        items: [
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
        ],
      },
    }

    it('header expect', () => {
      render(<Catalog />, { initialState })
      expect(screen.getByText('Stock of the companies')).toBeInTheDocument()
    })

    it('item expect', () => {
      render(<Catalog />, {
        initialState,
      })
      expect(screen.getByText('Samsung')).toBeInTheDocument()
    })

    it('fire modal by click', () => {
      render(<Catalog />, { initialState })
      fireEvent.click(screen.getByText('add stock'))
      expect(screen.getByText('Submit')).toBeInTheDocument()
    })

    it('success submit', () => {
      render(<Catalog />, { initialState })
      fireEvent.click(screen.getByText('add stock'))
      fireEvent.change(screen.getByPlaceholderText('title'), { target: { value: 'test title' } })
      fireEvent.change(screen.getByPlaceholderText('price'), { target: { value: 15000 } })
      fireEvent.click(screen.getByText('Submit'))
      expect(screen.getByText('test title')).toBeInTheDocument()
    })
  })
})
