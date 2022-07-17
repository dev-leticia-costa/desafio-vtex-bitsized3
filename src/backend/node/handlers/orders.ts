export async function orders(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { oms },
  } = ctx;
  ctx.status = 200;
  if (ctx.method == "GET") {
    let pedidos = await (await oms.listOrders()).list.filter(
      (pedido) => pedido.status !== "order-completed"
    );
    ctx.body = pedidos;
  }
  if (ctx.method === "POST") {
    console.log("ORDER STATE CHANGED");
    let body: any[] = [];
    let stringBody = "";

    ctx.req
      .on("data", (chunk) => body.push(chunk))
      .on("end", () => {
        stringBody = JSON.parse(Buffer.concat(body).toString());
        console.log(stringBody);
      });
  }
  //ctx.set("cache-control", "no-cache");
  await next();
}
