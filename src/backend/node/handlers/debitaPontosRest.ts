// import { PointsMasterdata } from './../clients/pointsMasterdata'
//import { ORDER_POINTS_ENTITY } from '../utils/constants'
import jwtwebtokken from 'jsonwebtoken'

export async function debitaPontosRest(ctx: Context, next: () => Promise<any>) {
  //   const {
  //     clients: { pointsMasterdata },
  //   } = ctx
  //let userId = null;
  const userToken = String(ctx.req.headers['x-vtex-session']) ?? ''
  const userInfo = jwtwebtokken.decode(userToken)
  console.log((userInfo as JsonPayloadRequest).id)

  await next()
}

interface JsonPayloadRequest {
  id: string
}
