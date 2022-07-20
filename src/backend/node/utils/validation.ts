export function validation(savePoints: SaveArray, id?: string) {
    const { clientId, orderId, points } = savePoints;

   
  
    if (clientId.length === 0) {
      throw new Error('Por favor, informe o seu nome')
    }
  
    if (orderId.length === 0) {
      throw new Error('é necessário informar o ID do pedido')
    }
  
    if ( points === 0) {
      throw new Error('É necessário informar o valor do pontos')
    }

  }