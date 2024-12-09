import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import {
  AuthUserCommand,
  AuthUserResult,
  CreateLojaCommand,
  CreateProductCommand,
  CreateUserCommand,
  ProductResult,
  ProdutoResult,
  StoreResult,
  UpdateProductCommand
} from '../types'

export default class Client {
  private axios: AxiosInstance

  constructor(
    private readonly baseUrl: string | undefined = process.env.BACKEND_URL ?? 'http://localhost:8080'
  ) {
    this.axios = axios.create({
      baseURL: this.baseUrl,
    })
  }

  private createClient(params: object = {}): AxiosInstance {
    const config: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      params: params
    }
    return axios.create(config)
  }

  private createAuthClient(params: object = {}): AxiosInstance {
    const config: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      params: params
    }
    const authToken = sessionStorage.getItem('token')
    if (authToken) {
      config.headers = {
        Authorization: `Bearer ${authToken}`,
      }
    }
    return axios.create(config)
  }

  async authenticateUser(data: AuthUserCommand): Promise<AuthUserResult> {
    const client = this.createClient()
    return (await client.post('/api/usuarios/login', data)).data
  }

  async createUser(data: CreateUserCommand) {
    const client = this.createClient()
    return (await client.post('/api/usuarios/cadastro', data)).data
  }

  async requestPasswordReset(email: string) {
    const client = this.createAuthClient()
    return (await client.post(`/api/usuarios/request-password-reset?email=${email}`)).data
  }

  async getDailyInvoice(idLoja: number) {
    const client = this.createAuthClient()
    return (await client.get(`/api/relatorios/fatura-diaria/${idLoja}`)).data
  }

  async getMonthlyInvoice(idLoja: number) {
    const client = this.createAuthClient()
    return (await client.get(`/api/relatorios/faturas-mensais/${idLoja}`)).data
  }

  async getMostSellerProduct(idLoja: number) {
    const client = this.createAuthClient()
    return (await client.get(`/api/relatorios/produto-mais-vendido/${idLoja}`)).data
  }

  async getReport() {
    const client = this.createAuthClient()
    const nomeArquivo = `relatorio-cohive-${new Date().getTime().toString()}`
    return (await client.post(`/api/relatorios/relatorio-transacoes?nomeArquivo=${nomeArquivo}`)).data
  }

  async getReportByMonth(lojaId: number) {
    const client = this.createAuthClient()
    const mes = new Date().getUTCMonth() + 1
    const ano = new Date().getUTCFullYear()
    const nomeArquivo = `relatorio-mensal-${mes}-${ano}.csv`
    return (
      await client.post(`/api/relatorios/relatorio-mensal/${lojaId}?nomeArquivo=${nomeArquivo}&mes=${mes}&ano=${ano}`)
    ).data
  }

  async getSalesLastWeek(idLoja: number) {
    const client = this.createAuthClient()
    return (await client.get(`/api/relatorios/valor-vendas-ultimos-sete-dias/${idLoja}`)).data
  }

  async getTransactions() {
    const client = this.createAuthClient()
    return (
      await client.get('/api/relatorios/relatorio-transacoes', {
        params: 'relatorioCohive.csv',
      })
    ).data
  }

  async createStore(data: CreateLojaCommand) {
    const client = this.createAuthClient()
    return (await client.post('/api/lojas', data)).data
  }

  async getStore(userId: number): Promise<StoreResult> {
    const client = this.createAuthClient()
    return (await client.get(`/api/lojas/consulta/${userId}`)).data
  }

  async getStock(idLoja: number): Promise<ProdutoResult[]> {
    const client = this.createAuthClient()
    return (await client.get(`/api/estoque/trazer-estoque/${idLoja}`)).data
  }

  async createProduct(data: CreateProductCommand) {
    const client = this.createAuthClient()
    return (await client.post('/api/estoque', data)).data
  }

  async deleteProductById(id: number) {
    const client = this.createAuthClient()
    return (await client.delete(`/api/estoque/${id}`)).data
  }

  async getProductById(id: number): Promise<ProductResult> {
    const client = this.createAuthClient()
    return (await client.get(`/api/estoque/${id}`)).data
  }

  async updateProductById(id: number, data: UpdateProductCommand) {
    const client = this.createAuthClient()
    return (await client.put(`/api/estoque/atualizar-produto/${id}`, data)).data
  }

  async toIncrease(data: any) {
    const client = this.createAuthClient()
    return (await client.put('/api/estoque/entrada-estoque', data)).data
  }

  async toDecrease(data: any) {
    const client = this.createAuthClient()
    return (await client.put('/api/estoque/baixa-estoque', data)).data
  }
}
