import { StoreResult } from './store-result'

export interface CreateProductCommand {
  nome: string
  categoria: string
  fabricante?: string
  descricao?: string
  precoVenda?: number
  precoCompra?: number
  quantidade?: number
  loja: StoreResult
}
