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
