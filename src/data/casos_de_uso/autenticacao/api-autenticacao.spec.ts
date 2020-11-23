
import { HttpPostClientSpy } from "../../test/mock-http-client";
import { ApiAutenticacao } from "./api-autenticacao";
type SutTypes = {
  sut: ApiAutenticacao,
  httpPostClientSpy: HttpPostClientSpy;
};
const criarSut = (url: string = "qualquer_url"): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new ApiAutenticacao(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy
  };
}

describe('ApiAutenticacao', () => {
  test('Deve chamar HttpPostClient com URL correta', async () => {
    const url = "outra_url";
    const { sut, httpPostClientSpy } = criarSut(url);

    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
