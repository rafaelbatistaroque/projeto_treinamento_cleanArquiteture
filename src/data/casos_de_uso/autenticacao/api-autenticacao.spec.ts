
import { HttpPostClientSpy } from "../../test/mock-http-client";
import { ApiAutenticacao } from "./api-autenticacao";

describe('ApiAutenticacao', () => {
  test('Deve chamar HttpPostClient com URL correta', async () => {
    const url = "qualquer_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new ApiAutenticacao(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
