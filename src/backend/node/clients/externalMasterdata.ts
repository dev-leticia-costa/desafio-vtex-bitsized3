// import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

// export class ExternalMasterdata extends ExternalClient
// {
//     constructor(context: IOContext, options?: InstanceOptions)
//     {
//         super(`http://${context.account}.vtexcommercestable.com.br`, context,
//         {
//             ...options,
//             headers:
//             {
//                 ...options?.headers,
//                 ...(context.authToken ? { VtexIdclientAutCookie: context.authToken} : null),
//                 'Content-Type': 'application/json'
//             }
//         })
//     }

//     public setPoints = (points: number, clientId: string, orderId: string) =>
//     {
//         return this.http.post(`api/dataentities/BT/documents`, {points, clientId, orderId})
//     }

//     public getPoint = (clientId: string) =>
//     {
//         return this.http.get(`/api/dataentities/BT/search?_fields=points&_where=(clientId=${clientId})`)
//     }
// }
