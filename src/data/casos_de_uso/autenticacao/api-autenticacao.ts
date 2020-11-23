import { HttpPostClient } from "data/protocols/http/htt-post-client";

export class ApiAutenticacao {
  constructor(private readonly url: string,
    private readonly httpPostClient: HttpPostClient) { }

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url);
  }
}
