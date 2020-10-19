import React from 'react'
import { render, screen, fireEvent } from '@/utils/test-utils'
import { ErrorNotification } from './index'

describe('ErrorNotification', () => {
  it('Renders the connected app', () => {
    const { container } = render(<ErrorNotification />)

    expect(container.firstChild).toBeNull()
  })

  describe('Render with value', () => {
    const initialState = {
      errorReducer: {
        isOpen: true,
        error: 'some error',
      },
    }

    it('header expect', () => {
      render(<ErrorNotification />, { initialState })
      expect(screen.getByText('some error')).toBeInTheDocument()
    })

    it('fire hide error', () => {
      const { container } = render(<ErrorNotification />, { initialState })
      fireEvent.click(screen.getByText('close error'))
      expect(container.firstChild).toBeNull()
    })
  })
})
