export type UpdateProductCommand = {
  id: number
  nome: string
  categoria: string
  fabricante?: string
  descricao?: string
  precoVenda?: number
  precoCompra?: number
  quantidade?: number
}
