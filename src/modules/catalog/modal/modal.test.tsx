import React from 'react'
import { render, screen, fireEvent } from '@/utils/test-utils'
import { Modal } from './index'

describe('Render with fetch value', () => {
  it('submit empty title', () => {
    render(<Modal closeModal={() => null} />)
    fireEvent.change(screen.getByPlaceholderText('title'), { target: { value: '' } })
    fireEvent.click(screen.getByText(/Submit/i))
    expect(screen.getByText(/Title is required/i)).toBeInTheDocument()
  })

  it('submit empty price', () => {
    render(<Modal closeModal={() => null} />)
    fireEvent.change(screen.getByPlaceholderText('price'), { target: { value: '' } })
    fireEvent.click(screen.getByText(/Submit/i))
    expect(screen.getByText(/Price is required/i)).toBeInTheDocument()
  })

  it('submit more 30 title symbols', () => {
    render(<Modal closeModal={() => null} />)
    fireEvent.change(screen.getByPlaceholderText('title'), {
      target: { value: 'testtesttesttesttesttesttesttesttesttesttesttest' },
    })
    fireEvent.click(screen.getByText(/Submit/i))
    expect(screen.getByText(/Max 30 symbols/i)).toBeInTheDocument()
  })

  it('submit empty price', () => {
    render(<Modal closeModal={() => null} />)
    fireEvent.change(screen.getByPlaceholderText('price'), { target: { value: '' } })
    fireEvent.click(screen.getByText(/Submit/i))
    expect(screen.getByText(/Price is required/i)).toBeInTheDocument()
  })

  it('must be greater than 0', () => {
    render(<Modal closeModal={() => null} />)
    fireEvent.change(screen.getByPlaceholderText('price'), { target: { value: '0' } })
    fireEvent.click(screen.getByText(/Submit/i))
    expect(screen.getByText(/Price must be greater than 0/i)).toBeInTheDocument()
  })
})
