import { json } from "co-body"
interface DebitValuesResponse {
  debitValues: {
    clientId: string
    points: number
  }
}

export const resolvers = {
  Routes: {
    debitaPoints: async (ctx:Context,{ debitValues }: DebitValuesResponse) => {
      
      const{req} = ctx
      const { pointsMasterdata } = ctx.clients
      const body: any = await json(req)
      const { points } = debitValues
      const userId = body?.account?.userId
      console.log('')
      await pointsMasterdata.setPoints(points - points * 2, userId, '')
      ctx.set('Content-Type','application/json');
      ctx.set('Cache-Control','no-cache,no-store');
      
      
      const res = {
        public: {
          data:{
             value: userId? 'Ponto debitado com sucesso': 'Usuário nao autenticado',
          },
         
        },
      }

      ctx.response.body = res;
      ctx.response.status = 200;

    },
  },
}