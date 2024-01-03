export function sum(x: number, y: number) {
  if (x < 0 || y < 0) throw new Error("Params must be a positive number")

  return x + y
}