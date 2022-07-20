export async function pointsOrdersList(_: unknown, __: unknown, ctx: Context) {
  const { pointsMasterdata } = ctx.clients
  return await pointsMasterdata.getAllPoints()
}
