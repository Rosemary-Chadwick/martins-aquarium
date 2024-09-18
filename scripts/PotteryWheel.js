let potteryPieces = 1;

export const makePottery = (shape, weight, height) => {
    const potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryPieces++
    }
    return potteryPiece
}