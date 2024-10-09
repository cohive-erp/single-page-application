import { StoreResult } from './store-result'

export type ProdutoResult = {
  dataEntradaInicial: string
  produto: {
    idProduto: number
    nome: string
    descricao?: string
    fabricante: string
    categoria: string
    precoVenda: number
    precoCompra: number
    quantidade: number
    loja: StoreResult,
    deleted: boolean
  }
  quantidadeVendida: number
}
