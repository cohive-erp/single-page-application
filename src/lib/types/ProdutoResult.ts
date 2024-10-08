export type ProdutoResult = {
  nome(nome: any): unknown
  precoVenda(precoVenda: any): unknown
  precoCompra(precoCompra: any): unknown
  categoria(categoria: any): unknown
  descricao: string
  fabricante(fabricante: any): unknown
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
    loja: {
      idLoja: number
      rua: string
      bairro: string
      cidade: string
      estado: string
      numero: number
      usuario: {
        id: number
        nome: string
        numeroCelular: string
        email: string
        senha: string
        deleted: boolean
      }
      cep: string
      cnpj: string
    },
    deleted: boolean
  }
  quantidade: number
}
