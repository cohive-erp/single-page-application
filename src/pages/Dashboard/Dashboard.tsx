/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header/Header'
import Paragraph from '../../components/Paragraph/Paragraph'
import Kpi from '../../components/Kpi/Kpi'
import LineChartComponent from '../../components/LineChart/LineChart'
import Ocorrencias from '../../components/Alerta/Alerta'
import ActionHistory from '../../components/ActionHistory/ActionHistory'
import { ProdutoResult } from '../../lib/types'
import useClient from '../../lib/client/useClient'
import { useTranslation } from 'react-i18next'
import CadastrarLoja from '../../../src/components/CadastrarLoja/CadastrarLoja'

function EstoquePage() {
  const client = useClient()
  const { t } = useTranslation()

  const [dailyInvoice, setDailyInvoice] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)
  const [monthlyInvoice, setMonthlyInvoice] = useState(0)
  const [salesLastWeek, setSalesLastWeek] = useState([])
  const [mostSellerProduct, setMostSellerProduct] = useState<ProdutoResult>()
  const [hasStore, setHasStore] = useState(false)

  const userData = JSON.parse(sessionStorage.getItem('userData') ?? '')

  useEffect(() => {
    client.getDailyInvoice().then((data) => {
      setDailyInvoice(data)
    })

    client.getMonthlyInvoice().then((data) => {
      const total = data.reduce((sum: number, item: any) => typeof item === 'number' ? sum + item : sum, 0)
      setMonthlyInvoice(total)
    })

    client.getMostSellerProduct().then((data) => {
      setMostSellerProduct(data)
    })

    client.getSalesLastWeek().then((data) => {
      setSalesLastWeek(data)
    })

    client.getStock(userData.loja.idLoja).then((data) => {
      setTotalProducts(data.length)
      setHasStore(true)
    })
  }, [])

  const dailyInvoiceValue = dailyInvoice ? dailyInvoice.toFixed(2).replace('.', ',') : '0,00'
  const monthlyInvoiceValue = monthlyInvoice ? monthlyInvoice.toFixed(2).replace('.', ',') : '0,00'
  const invoiceValidate = dailyInvoice > monthlyInvoice ? 'text-red-500' : 'text-purple-500'

  const nomeProduto = mostSellerProduct?.produto?.nome ?? 'N/A'

  return (
    <>
      {hasStore && (
        <div className='bg-slate-200 flex flex-col justify-center items-center'>
          <Helmet>
            <title>Painel de {userData.nome} | Cohive</title>
          </Helmet>
          <Header name={userData.nome} totalProducts={totalProducts} />
          <div className='w-[90%] h-[80%] flex flex-col gap-4 justify-center items-center py-[2%]'>
            <div className='bg-slate-100 w-full rounded-xl shadow-md h-14 flex justify-center items-center p-4'>
              <Paragraph size='h2'>{t('StoreOverview')}</Paragraph>
            </div>

            <div className='flex flex-row gap-4 justify-center w-full h-full'>
              <div className='flex flex-col gap-4 w-full'>
                <div className='w-full flex flex-row gap-4 justify-between items-center'>
                  <Kpi value={nomeProduto} title={t('BestSellingProduct')} />
                  <Kpi value={`R$ ${monthlyInvoiceValue}`} title={t('MonthlyInvoice')} className={invoiceValidate} />
                  <Kpi value={`R$ ${dailyInvoiceValue}`} title={t('DailyInvoice')} className={invoiceValidate} />
                </div>

                <LineChartComponent lastSevenDaysSales={salesLastWeek} />
              </div>
            </div>

            <div className='flex flex-row gap-4 justify-center w-full h-full'>
              <div className='flex flex-col gap-4 w-full'>
                <ActionHistory />
              </div>

              <Ocorrencias />
            </div>

            {/* <div className='w-full'>
            <BarChartComponent data={data} />
            </div> */}
          </div>
          <Footer />
        </div>
      )}

      {!hasStore && (
        <div className='bg-slate-200 flex flex-col justify-center items-center'>
          <Helmet>
            <title>{t('StoreOverview')} | Cohive</title>
          </Helmet>
          <Header name={userData.nome} totalProducts={totalProducts} />
          <div className='w-[50%] h-full flex justify-center items-center pt-8 pb-16 p-32'>
            <CadastrarLoja />
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default EstoquePage
