export async function orders(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { oms, pointsMasterdata },
  } = ctx

  ctx.status = 200

  console.log(ctx.req.headers)
  if (ctx.method == 'GET') {
    let pedidos = await (await oms.listOrders()).list.filter(
      pedido => pedido.status !== 'order-completed'
    )
    ctx.body = pedidos
  }
  if (ctx.method === 'POST') {
    console.log('ORDER STATE CHANGED')
    let body: any[] = []
    let orderState = null

    ctx.req
      .on('data', chunk => body.push(chunk))
      .on('end', async () => {
        orderState = JSON.parse(Buffer.concat(body).toString())

        if (orderState.State == 'waiting-ffmt-authorization') {
          //payment-approved
          const orderData = await oms.order(orderState.OrderId),
            totals = orderData.totals.filter(data => data.id == 'Items'),
            priceTotals = totals[0].value,
            price = priceTotals.toString().slice(0, -2),
            clientId = orderData.clientProfileData.userProfileId

          console.log(`Preço: ${price}`, `ID do Cliente: ${clientId}`)

          const testeData = await pointsMasterdata.setPoints(
            parseInt(price),
            clientId,
            orderData.orderId
          )

          console.log(testeData)

          console.log(await pointsMasterdata.getPoint(clientId))
        }
      })
  }
  //ctx.set("cache-control", "no-cache");
  await next()
}
