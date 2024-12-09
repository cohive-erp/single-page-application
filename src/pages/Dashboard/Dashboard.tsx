import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header/Header'
import Paragraph from '../../components/Paragraph/Paragraph'
import Kpi from '../../components/Kpi/Kpi'
import LineChartComponent from '../../components/LineChart/LineChart'
import Ocorrencias from '../../components/Ocorrencias/Ocorrencias'
import useClient from '../../lib/client/useClient'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import UltimosEstoques from 'src/components/UltimosEstoques/UltimosEstoques'
import DonutChartComponent from '../../components/DonutChartComponent/DonutChartComponent'
import Loading from 'src/components/Loading/Loading'

function EstoquePage() {
  const client = useClient()
  const { t } = useTranslation()

  const userData = JSON.parse(sessionStorage.getItem('userData') ?? '')
  const idLoja = userData.loja.idLoja

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', idLoja],
    queryFn: () => client.getStock(idLoja),
    enabled: !!userData.loja,
    staleTime: 1000 * 60 * 5
  })

  const { data: dailyInvoice } = useQuery({
    queryKey: ['daily_invoice', idLoja],
    queryFn: () => client.getDailyInvoice(idLoja),
    enabled: !!userData.loja,
    staleTime: 1000 * 60 * 5
  })

  const { data: monthlyInvoice } = useQuery({
    queryKey: ['monthly_invoice', idLoja],
    queryFn: async () => {
      const monthlyInvoice = await client.getMonthlyInvoice(idLoja)
      return monthlyInvoice.reduce((sum: number, item: any) => typeof item === 'number' ? sum + item : sum, 0)
    },
    enabled: !!userData.loja,
    staleTime: 1000 * 60 * 5
  })

  const { data: salesLastWeek } = useQuery({
    queryKey: ['sales_last_week', idLoja],
    queryFn: () => client.getSalesLastWeek(idLoja),
    enabled: !!userData.loja,
    staleTime: 1000 * 60 * 5
  })

  const { data: mostSellerProduct } = useQuery({
    queryKey: ['most_seller_product', idLoja],
    queryFn: () => client.getMostSellerProduct(idLoja),
    enabled: !!userData.loja,
    staleTime: 1000 * 60 * 5
  })

  const dailyInvoiceValue = dailyInvoice ? dailyInvoice.toFixed(2).replace('.', ',') : '0,00'
  const monthlyInvoiceValue = monthlyInvoice ? monthlyInvoice.toFixed(2).replace('.', ',') : '0,00'
  const invoiceValidate = dailyInvoice > monthlyInvoice ? 'text-red-500' : 'text-purple-500'

  const nomeProduto = mostSellerProduct?.produto?.nome ?? 'N/A'

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className='bg-slate-200 flex flex-col justify-center items-center'>
          <Helmet>
            <title>Painel de {userData.nome} | Cohive</title>
          </Helmet>
          <Header name={userData.nome} totalProducts={products?.length ?? 0} />
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
              <div className='flex gap-4 w-full h-full justify-between'>
                <DonutChartComponent products={products ?? []} />
                <UltimosEstoques products={products ?? []} />
                <Ocorrencias products={products ?? []} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default EstoquePage
