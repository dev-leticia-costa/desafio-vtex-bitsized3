//import { ORDER_POINTS_ENTITY } from '../utils/constants'

export async function getPointsById(ctx: Context, next: () => Promise<any>) {
  //const masterdata = ctx.clients.masterdata
  ctx.body = await ctx.clients.pointsMasterdata.getAllPoints()

  // const savedOrdersPoints = await masterdata.searchDocuments<{
  //   clientId: string
  //   orderId: string
  //   points: number
  // }>({
  //   dataEntity: 'BT',
  //   fields: ['_all'],
  //   pagination: {
  //     page: 0,
  //     pageSize: 10,
  //   },
  //   schema: 'v0',
  // })

  // console.log(savedOrdersPoints)

  // ctx.body = savedOrdersPoints
  await next()
}
