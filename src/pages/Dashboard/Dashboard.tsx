import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer.tsx'
import ProductTable from '../../components/Table/ProductTable.tsx'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header/Header.tsx'
import Paragraph from '../../components/Paragraph/Paragraph.tsx'
import Kpi from '../../components/Kpi/Kpi.tsx'
import BarChartComponent from '../../components/BarChart/BarChart.tsx'
import Button from '../../components/Button/Button.tsx'

const data = [
  {
    month: 'Jan',
    Vendido: 6856,
    'Em estoque': 2856,
  },
  {
    month: 'Feb',
    Vendido: 7032,
    'Em estoque': 3032,
  },
  {
    month: 'Mar',
    Vendido: 8023,
    'Em estoque': 7033,
  },
  {
    month: 'Apr',
    Vendido: 5512,
    'Em estoque': 4512,
  },
  {
    month: 'May',
    Vendido: 5600,
    'Em estoque': 8060,
  },
  {
    month: 'Jun',
    Vendido: 1000,
    'Em estoque': 8539,
  },
  {
    month: 'Jul',
    Vendido: 8590,
    'Em estoque': 5340,
  },
  {
    month: 'Aug',
    Vendido: 8010,
    'Em estoque': 7010,
  },
  {
    month: 'Sep',
    Vendido: 7590,
    'Em estoque': 6950,
  },
  {
    month: 'Oct',
    Vendido: 7180,
    'Em estoque': 3345,
  },
  {
    month: 'Nov',
    Vendido: 1210,
    'Em estoque': 1330,
  },
  {
    month: 'Dec',
    Vendido: 6013,
    'Em estoque': 5321,
  },
]

function EstoquePage() {
  const [loja, setLoja] = useState()

  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>Painel de Raquel | Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
      </Helmet>
      <Header name='Raquel' totalProducts={2} />
      <div className='w-[90%] h-[80%] flex flex-col gap-4 justify-center items-center pt-[2%] pb-[2%]'>
          <div className='bg-slate-100 w-full rounded-xl shadow-md h-14 flex justify-center items-center p-4'>
            <Paragraph size='h2'>Visão Geral da Loja</Paragraph>
          </div>

          <div className='flex flex-row gap-4 justify-between w-full'>
            <div className='flex flex-col gap-4 w-[70%] h-[10%]'>
              <div className='w-full flex flex-row gap-4 justify-between items-center'>
                <Kpi value='teste' title='teste' />
                <Kpi value='teste' title='teste' />
                <Kpi value='R$5000' title='teste' />
              </div>
              <div className='flex h-[60%]'>
              <BarChartComponent data={data} />
              </div>
            </div>

            <div className='card w-full h-full bg-slate-100 shadow-xl'>
              <div className='card-body h-full'>
                <Paragraph size='h2'>🚨 Ocorrências</Paragraph>

                <div className='card-actions justify-center'>
                    <Button content='Gerar relatório' className='w-full shadow-sm' onClick={() => {}} />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <BarChartComponent data={data} />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default EstoquePage
