import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICatalogState } from '@/core/types/catalog'
import { thunkFetchCatalog } from '@/core/actions/catalog'
import { Spacer } from '@/components/atoms/Spacer'
import { Header } from '@/components/atoms/Header'
import { Button } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'
import { Items } from './items'
import { Modal } from './modal'

interface RootState {
  catalog: ICatalogState
}

const Catalog: React.FC = () => {
  const [isOpen, open] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  const { items } = useSelector((store: RootState) => store.catalog)
  const isEmptyCatalog = items.length === 0
  React.useEffect(() => {
    if (isEmptyCatalog) {
      dispatch(thunkFetchCatalog())
    }
  }, [])

  if (isEmptyCatalog) {
    return null
  }

  return (
    <Container>
      <Spacer top='20'>
        <Header align='center'>Stock of the companies</Header>
      </Spacer>
      <Spacer top='20' bottom='20'>
        <Items items={items} />
      </Spacer>
      <Button onClick={() => open(true)}>add stock</Button>
      {isOpen && <Modal closeModal={() => open(false)} />}
    </Container>
  )
}

export default Catalog
