import React from 'react'
import { render as rtlRender, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '@/core/reducers/index'

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  return next(action)
}

function render(ui: React.ReactElement, { initialState = {}, ...renderOptions } = {}): RenderResult {
  function Wrapper({ children }: { children: React.ReactNode }) {
    const store = createStore(reducer, initialState, applyMiddleware(thunk))

    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
