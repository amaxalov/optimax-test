import { setError, hideError } from './error'
import { SET_ERROR, HIDE_ERROR } from '../constants/error'
import expect from 'expect'

describe('error actions', () => {
  it('set error', () => {
    expect(setError('error')).toEqual({
      type: SET_ERROR,
      error: 'error',
    })
  })

  it('hide error', () => {
    expect(hideError()).toEqual({
      type: HIDE_ERROR,
    })
  })
})
