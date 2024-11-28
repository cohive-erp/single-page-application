/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
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
import { AuthContext } from '../../contexts/AuthContext'

function EstoquePage() {
  const client = useClient()
  const auth = useContext(AuthContext)

  const [dailyInvoice, setDailyInvoice] = useState(0)
  const [monthlyInvoice, setMonthlyInvoice] = useState(0)
  const [salesLastWeek, setSalesLastWeek] = useState([])
  const [mostSellerProduct, setMostSellerProduct] = useState<ProdutoResult>()

  useEffect(() => {
    client.getDailyInvoice().then((data) => {
      console.log(data)
      setDailyInvoice(data)
    })
  }, [])

  const dailyInvoiceValue = dailyInvoice ? dailyInvoice.toFixed(2).replace('.', ',') : '0,00'
  const monthlyInvoiceValue = monthlyInvoice ? monthlyInvoice.toFixed(2).replace('.', ',') : '0,00'
  const invoiceValidate = dailyInvoice > monthlyInvoice ? 'text-red-500' : 'text-purple-500'

  const nomeProduto = mostSellerProduct?.produto?.nome ?? 'N/A'

  return (
    <>
      <div className='bg-slate-200 flex flex-col justify-center items-center'>
        <Helmet>
          <title>Painel de {auth.nome} | Cohive</title>
        </Helmet>
        <Header name={auth.nome} />
        <div className='w-[90%] h-[80%] flex flex-col gap-4 justify-center items-center py-[2%]'>
          <div className='bg-slate-100 w-full rounded-xl shadow-md h-14 flex justify-center items-center p-4'>
            <Paragraph size='h2'>Visão Geral da Loja</Paragraph>
          </div>

          <div className='flex flex-row gap-4 justify-center w-full h-full'>
            <div className='flex flex-col gap-4 w-full'>
              <div className='w-full flex flex-row gap-4 justify-between items-center'>
                <Kpi value={nomeProduto} title='Produto mais vendido' />
                <Kpi value={`R$ ${monthlyInvoiceValue}`} title='Fatura mensal' className={invoiceValidate} />
                <Kpi value={`R$ ${dailyInvoiceValue}`} title='Fatura diária' className={invoiceValidate} />
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
    </>
  )
}

export default EstoquePage
