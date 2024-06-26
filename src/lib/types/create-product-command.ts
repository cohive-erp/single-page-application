export type CreateProductCommand = {
  nome: string
  categoria: string
  fabricante?: string
  descricao?: string
  precoVenda?: number
  precoCompra?: number
  quantidade?: number
  loja: {
    idLoja: number
  }
}
