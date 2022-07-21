import { somarPontos } from '../utils/somarPontos'

export const pointsClientById = async (
  _: unknown,
  { clientId }: { clientId: string },
  ctx: Context
) => {
  const { pointsMasterdata } = ctx.clients
  const clientPoints: pointsClient[] = await pointsMasterdata.getPoint(clientId)
  let totalPoints = somarPontos(clientPoints)
  return {
    clientId,
    points: totalPoints,
  }
}

interface pointsClient {
  points: number
}
