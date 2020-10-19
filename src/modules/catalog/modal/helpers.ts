import type { Values, Errors } from './types'

export const vaildate = (values: Values): Errors => {
  const errors: Errors = {}
  if (!values.title) {
    errors.title = 'Title is required'
  } else if (values.title.length > 30) {
    errors.title = 'Max 30 symbols'
  }
  if (!values.price) {
    errors.price = 'Price is required'
  } else if (parseInt(values.price) <= 0) {
    errors.price = 'Price must be greater than 0'
  }

  return errors
}
