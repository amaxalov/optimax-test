import * as React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { Spacer } from '@/components/atoms/Spacer'
import { addToCatalog } from '@/core/actions/catalog'
import data from './data'
import { vaildate } from './helpers'
import type { Values } from './types'
import * as Styled from './styled'

type Props = {
  closeModal: () => void
}

export const Modal: React.FC<Props> = React.memo(function Modal({ closeModal }: Props) {
  const dispatch = useDispatch()
  const onSubmit = (values: Values) => {
    dispatch(addToCatalog({ ...values, price: parseInt(values.price), id: Date.now() }))
    closeModal()
  }

  return (
    <Styled.Root>
      <Form
        onSubmit={onSubmit}
        validate={vaildate}
        render={({ handleSubmit, pristine, submitting, invalid, form }) => (
          <form onSubmit={handleSubmit} className='form'>
            <Styled.CloseModal
              onClick={() => {
                form.reset()
                closeModal()
              }}>
              ✖
            </Styled.CloseModal>
            {data.map((item) => (
              <Field key={`field_${item.name}`} name={item.name} type={item.type}>
                {({ input, meta }) => (
                  <Spacer bottom='20'>
                    <Input {...input} type={item.type} placeholder={item.name} />
                    {meta.error && meta.touched && <Styled.Error>{meta.error}</Styled.Error>}
                  </Spacer>
                )}
              </Field>
            ))}
            <Button type='submit' disabled={submitting || pristine || invalid}>
              Submit
            </Button>
          </form>
        )}
      />
    </Styled.Root>
  )
})
