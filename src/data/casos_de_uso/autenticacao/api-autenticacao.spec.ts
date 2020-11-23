import { HttpPostClient } from "data/protocols/http/htt-post-client";
import { ApiAutenticacao } from "./api-autenticacao";

describe('ApiAutenticacao', () => {
  test('Deve chamar HttpPostClient com URL correta', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return await Promise.resolve();
      }
    }
    const url = "qualquer_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new ApiAutenticacao(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
