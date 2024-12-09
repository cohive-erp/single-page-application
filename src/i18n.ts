import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      'LoginPage': 'Entrar | Sistema ERP: Gestão rápida, prática e útil | Cohive',
      'SignUpPage': 'Cadastrar | Sistema ERP: Gestão rápida, prática e útil | Cohive',
      'ResetPasswordPage': 'Esqueceu sua senha? | Sistema ERP: Gestão rápida, prática e útil | Cohive',
      'StockPage': 'Estoque | Sistema ERP: Gestão rápida, prática e útil | Cohive',
      'Action': 'Ação',
      'Products': 'Produtos',
      'NewProduct': 'Novo Produto',
      'NameProduct': 'Nome do Produto',
      'SellingPrice': 'Preço Venda',
      'ProductSummary': 'Resumo do produto',
      'PurchasePrice': 'Preço Compra',
      'UnitPrice': 'Preço Unitário',
      'Quantity': 'Quantidade',
      'Description': 'Descrição',
      'Category': 'Categoria',
      'Supplier': 'Fornecedor',
      'SupplierName': 'Nome do Fornecedor',

      'GetData': 'Obter dados',

      'ProductNameExample': 'Ex: Tapete',
      'CategoryExample': 'Ex: Cama',
      'SupplierExample': 'Ex: Amazon',
      'ProductSummaryExample': 'Ex: Cama para crianças',
      'QuantityExample': 'Min 0, Max: 1000',

      'QuantityAcronym': 'Qtd.',
      'BRLCurrency': 'R$',

      'Add': 'Adicionar',
      'Cancel': 'Cancelar',
      'Edit': 'Editar',
      'Delete': 'Apagar',
      'Search': 'Buscar',

      'LogoutSuccess': 'Desconectado com sucesso',
      'CreateProductSuccess': 'Produto adicionado com sucesso',
      'CreateProductError': 'Erro ao tentar adicionar produto',
      'GetProductError': 'Erro ao tentar obter produtos',
      'CreateReportSuccess': 'Relatório gerado com sucesso',
      'CreateReportError': 'Erro ao tentar gerar relatório',

      'Generating': 'Gerando...',

      'Dashboard': 'Painel',
      'Stock': 'Estoque',
      'StoreOverview': 'Visão Geral da Loja',

      'BestSellingProduct': 'Produto mais vendido',
      'MonthlyInvoice': 'Fatura mensal',
      'DailyInvoice': 'Fatura diária',

      'OpenProfile': 'Abrir Perfil',
      'OpenSettings': 'Abrir Configurações',
      'Logout': 'Desconectar',
    }
  },
  en: {
    translation: {
      'LoginPage': 'Login | ERP System: Fast, practical and useful management | Cohive',
      'SignUpPage': 'Sign Up | ERP System: Fast, practical and useful management | Cohive',
      'ResetPasswordPage': 'Forgot your password?? | ERP System: Fast, practical and useful management | Cohive',
      'StockPage': 'Stock | ERP System: Fast, practical and useful management | Cohive',
      'Action': 'Action',
      'Products': 'Products',
      'NewProduct': 'New Product',
      'NameProduct': 'Product Name',
      'SellingPrice': 'Selling Price',
      'PurchasePrice': 'Purchase Price',
      'UnitPrice': 'Unit Price',
      'Quantity': 'Quantity',
      'Description': 'Description',
      'Category': 'Category',
      'Supplier': 'Supplier',

      'GetData': 'Get Data',

      'ProductNameExample': 'e.g. Carpet',
      'CategoryExample': 'e.g. Bed',
      'SupplierExample': 'e.g. Amazon',
      'ProductSummaryExample': 'e.g. Bed for children',
      'QuantityExample': 'Min: 0, max: 1000',

      'QuantityAcronym': 'Qty.',
      'BRLCurrency': 'BRL',

      'Add': 'Add',
      'Cancel': 'Cancel',
      'Edit': 'Edit',
      'Delete': 'Delete',
      'Search': 'Search',

      'LogoutSuccess': 'Logged out successfully',
      'CreateProductSuccess': 'Product added successfully',
      'CreateProductError': 'Error trying to add product',
      'GetProductError': 'Error trying to get products',
      'CreateReportSuccess': 'Report generated successfully',
      'CreateReportError': 'Error trying to generate report',

      'Generating': 'Generating...',

      'Dashboard': 'Dashboard',
      'Stock': 'Stock',
      'StoreOverview': 'Store Overview',

      'BestSellingProduct': 'Best selling product',
      'MonthlyInvoice': 'Monthly invoice',
      'DailyInvoice': 'Daily invoice',

      'OpenProfile': 'Open Profile',
      'OpenSettings': 'Open Settings',
      'Logout': 'Logout',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
