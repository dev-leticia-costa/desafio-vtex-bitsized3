import { IOClients } from '@vtex/api'

import { OMS } from '@vtex/clients'

import Analytics from './analytics'
import { PointsMasterdata } from './pointsMasterdata'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get analytics() {
    return this.getOrSet('analytics', Analytics)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }

  public get pointsMasterdata() {
    return this.getOrSet('pointsMasterdata', PointsMasterdata)
  }
}
