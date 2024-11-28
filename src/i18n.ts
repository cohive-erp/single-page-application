import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      'LoginPage': 'Entrar | Sistema ERP: Gestão rápida, prática e útil | Cohive',
      'SignUpPage': 'Cadastrar | Sistema ERP: Gestão rápida, prática e útil | Cohive',
      'ResetPasswordPage': 'Esqueceu sua senha? | Sistema ERP: Gestão rápida, prática e útil | Cohive',
      'StockPage': 'Estoque | Sistema ERP: Gestão rápida, prática e útil | Cohive',

      'Products': 'Produtos',
      'NewProduct': 'Novo Produto',
      'NameProduct': 'Nome do Produto',
      'SellingPrice': 'Preço Venda',
      'PurchasePrice': 'Preço Compra',
      'UnitPrice': 'Preço Unitário',
      'Quantity': 'Quantidade',
      'Description': 'Descrição',
      'Category': 'Categoria',

      'GetData': 'Obter dados',
    }
  },
  en: {
    translation: {
      'LoginPage': 'Login | ERP System: Fast, practical and useful management | Cohive',
      'SignUpPage': 'Sign Up | ERP System: Fast, practical and useful management | Cohive',
      'ResetPasswordPage': 'Forgot your password?? | ERP System: Fast, practical and useful management | Cohive',
      'StockPage': 'Stock | ERP System: Fast, practical and useful management | Cohive',

      'Products': 'Products',
      'NewProduct': 'New Product',
      'NameProduct': 'Product Name',
      'SellingPrice': 'Selling Price',
      'PurchasePrice': 'Purchase Price',
      'UnitPrice': 'Unit Price',
      'Quantity': 'Quantity',
      'Description': 'Description',
      'Category': 'Category',

      'GetData': 'Get Data',
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
