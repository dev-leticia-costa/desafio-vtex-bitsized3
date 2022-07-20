import { validation } from '../utils/validation'
import { ExternalMasterdata } from '../clients/externalMasterdata'
import { ExternalClient } from '@vtex/api'

export async function saveMasterdata(
  _: unknown,
  savePoints: SavePoints,
  ctx: Context
) {
  validation(savePoints.saveData)

  const {
    clients: { cashback },
    vtex: { account },
  } = ctx

  const value = await cashback.createCashback(account, savePoints)

  return value
}

// external 