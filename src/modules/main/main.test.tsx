import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import Main from './index'

test('test app', () => {
  const { getByText } = render(<Main />)
  const linkElement = getByText(/main page/i)
  expect(linkElement).toBeInTheDocument()
})
