import {
  LRUCache,
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState,
  method,
} from '@vtex/api'
import { Clients } from './clients'
import { analytics } from './handlers/analytics'
import { orders } from './handlers/orders'
import { debitaPontosRest } from './handlers/debitaPontosRest'
import { pointsOrdersList } from './resolvers/pointsOrdersList'
import { pointsClientById } from './resolvers/pointsClientById'
import { debitaPoints } from './resolvers/debitaPoints'

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })
metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext<Clients, State>
  interface State extends RecorderState {
    code: number
  }
}

const THREE_SECONDS_MS = 3 * 1000
const CONCURRENCY = 10

export default new Service<Clients, State, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 10000,
      },
      events: {
        exponentialTimeoutCoefficient: 2,
        exponentialBackoffCoefficient: 2,
        initialBackoffDelay: 50,
        retries: 1,
        timeout: THREE_SECONDS_MS,
        concurrency: CONCURRENCY,
      },
    },
  },
  routes: {
    analytics: method({
      GET: [analytics],
    }),
    orders: method({
      GET: [orders],
      POST: [orders],
    }),
    points: method({
      GET: [debitaPontosRest],
    }),
  },
  graphql: {
    resolvers: {
      Query: {
        pointsOrdersList,
        pointsClientById,
      },
      Mutation: {
        debitaPoints,
      },
    },
  },
})
