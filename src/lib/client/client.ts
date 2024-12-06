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

  async getDailyInvoice() {
    const client = this.createAuthClient()
    return (await client.get('/api/relatorios/fatura-diaria')).data
  }

  async getMonthlyInvoice() {
    const client = this.createAuthClient()
    return (await client.get('/api/relatorios/faturas-mensais')).data
  }

  async getMostSellerProduct() {
    const client = this.createAuthClient()
    return (await client.get('/api/relatorios/produto-mais-vendido')).data
  }

  async getReport() {
    const client = this.createAuthClient()
    return (await client.get('/api/relatorios/get-relatorio-csv?nomeArquivo=relatorioMensal.csv')).data
  }

  async getReportByMonth(month: number, year: number) {
    const client = this.createAuthClient()
    return (
      await client.get('/api/relatorios/get-relatorio-csv', {
        params: { nomeArquivo: 'relatorioCohive.csv', month, year },
      })
    ).data
  }

  async getSalesLastWeek() {
    const client = this.createAuthClient()
    return (await client.get('/api/relatorios/valor-vendas-ultimos-sete-dias')).data
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
}
