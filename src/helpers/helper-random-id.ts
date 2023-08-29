/**
 * @description Returns a random number between 1 and 10000
 * @returns {number} random number between 1 and 10000
 */
export const getRandomId = (): number => {
  return Math.floor((Math.random()*10000)+1)
}
