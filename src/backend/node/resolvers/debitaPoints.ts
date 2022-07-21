export const debitaPoints = async (
  _: unknown,
  { debitValues }: DebitValuesResponse,
  ctx: Context
) => {
  const { clientId, points } = debitValues
  const { pointsMasterdata } = ctx.clients
  await pointsMasterdata.setPoints(points - points * 2, clientId, '')

  return {
    clientId,
    points,
  }
}

interface DebitValuesResponse {
  debitValues: {
    clientId: string
    points: number
  }
}
