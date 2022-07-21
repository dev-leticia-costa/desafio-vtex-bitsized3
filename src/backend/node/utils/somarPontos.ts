export function somarPontos(pontosList: { points: number }[]) {
  let totalPoints = 0
  pontosList.forEach(x => {
    totalPoints += x.points
  })
  return totalPoints
}
