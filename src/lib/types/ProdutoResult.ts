import { StoreResult } from './store-result'

export type ProductResult = {
  id: number
  nome: string
  descricao?: string
  fabricante: string
  categoria: string
  precoVenda: number
  precoCompra: number
  quantidade: number | null
  loja: StoreResult
  deleted: boolean
}
