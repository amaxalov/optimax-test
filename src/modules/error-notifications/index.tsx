import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideError } from '@/core/actions/error'
import { IErrorState } from '@/core/types/error'
import * as Styled from './styled'
import { Button } from '@/components/atoms/Button'
import { Spacer } from '@/components/atoms/Spacer'

interface RootState {
  errorReducer: IErrorState
}

export const ErrorNotification: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.errorReducer.isOpen)
  const error = useSelector((state: RootState) => state.errorReducer.error)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(hideError())
  }

  return (
    <>
      {isOpen && error && (
        <Styled.Root>
          <Spacer right='20'>
            <Styled.Text>{error}</Styled.Text>
          </Spacer>
          <Button onClick={handleClose}>close error</Button>
        </Styled.Root>
      )}
    </>
  )
}
