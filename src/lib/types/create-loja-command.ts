export type CreateLojaCommand = {
  numero?: number | null
  cep: string
  cnpj: string
  usuario: {
    id: number
  }
}
