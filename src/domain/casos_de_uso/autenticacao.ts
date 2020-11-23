import { ContaModel } from '../models/conta_model';

export interface Autenticacao{
  autenticar(params: Autenticacao.Parametros): Promise<Autenticacao.Model>
}

export namespace Autenticacao{
  export type Parametros = {
    email: string
    senha: string
  }
  export type Model = ContaModel;
}
