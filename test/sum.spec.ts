import { test, expect, it } from "vitest"
import { sum } from "../sum"

// BDD - > Behavior/test driven development

it("should be able to sum two positive numbers", () => {
  // AAA
  // 1 A -> Arrange -> Preparo do teste
  const x = 10
  const y = 5
  // 2 A -> Act -> Execucao do teste
  const result = sum(x,y)
  // 3 A -> Assert -> Validar a execucao
  expect(result).toEqual(15)
})

it("Nao deve ser possível somar os número caso o primeiro parametro seja negativo", () => {
  const x = -10
  const y = 5

  expect(() => sum(x, y)).toThrow("Params must be a positive number")
})

it("Nao deve ser possível somar os número caso o segundo parametro seja negativo", () => {
  const x = 10
  const y = -5

  expect(() => sum(x, y)).toThrow("Params must be a positive number")
})

// Test Patterns
// Dummy
// Mock
// Spy
// Stub
// Fake

// Service -> Repository