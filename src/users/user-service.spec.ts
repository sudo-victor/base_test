import { expect, it, vi } from "vitest"
import { UserService } from "./user-service"

/**
 * 1 - Criei um repo fake para conseguir instanciar o serviço
 * 2 - Instancie a classe que quero testar
 */

const repositoryFake = { findByEmail: () => {}, save: () => {} }
const userService = new UserService(repositoryFake)

it("should be able to create an user", async () => {
  // Ajuste para rodar o teste
  const params = {
    name: "Wafiter",
    email: "wafiter@email.com",
    password: "123456"
  }
  const findByEmailSpy = vi.spyOn(repositoryFake, "findByEmail")
  vi.spyOn(repositoryFake, "save").mockResolvedValue({
    id: "id-aleatorio",
    name: "Wafiter"
  } as any)

  // Execucao da funcao que estou testando
  const result = await userService.create(params) as any

  // Validaçao do retorno
  expect(result.id).toBeDefined()
  expect(result.name).toEqual("Wafiter")
  expect(findByEmailSpy).toBeCalledTimes(1)
  expect(findByEmailSpy).toBeCalledWith("wafiter@email.com")
})

it("should not be able to create an user if email already exists", async () => {
  const params = {
    name: "Wafiter",
    email: "wafiter@email.com",
    password: "123456"
  }
  vi.spyOn(repositoryFake, "findByEmail").mockResolvedValue({
    id: "",
    email: "wafiter@email.com",
    name: ""
  } as any)

  expect(() => userService.create(params)).rejects.toThrow(new Error("User already exists"))
})
