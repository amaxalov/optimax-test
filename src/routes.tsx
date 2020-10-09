import * as React from 'react'
import { Route, Switch } from 'react-router'
import { INDEX_ROUTE, CATALOG_ROUTE, CART_ROUTE } from './routes-map'
import Main from '@/modules/main'
import Catalog from '@/modules/catalog'
import Cart from '@/modules/cart'

const NotFound = React.lazy(() => import(/* webpackChunkName: "404" */ '@/modules/not-found'))

export const Routes: React.FC = () => (
  <React.Suspense fallback={<div>Load...</div>}>
    <Switch>
      <Route path={INDEX_ROUTE} exact component={Main} />
      <Route path={CATALOG_ROUTE} exact component={Catalog} />
      <Route path={CART_ROUTE} exact component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </React.Suspense>
)
