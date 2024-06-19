import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer.tsx'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header/Header.tsx'
import Paragraph from '../../components/Paragraph/Paragraph.tsx'
import Kpi from '../../components/Kpi/Kpi.tsx'
import BarChartComponent from '../../components/BarChart/BarChart.tsx'
import Button from '../../components/Button/Button.tsx'
import LineChartComponent from '../../components/LineChart/LineChart.tsx'
import getMostSellerProduct from '../../lib/services/Get/get-most-seller-product.ts'
import { ProdutoResult } from '../../lib/types/ProdutoResult.ts'
import { CreateLojaCommand } from '../../lib/types/create-loja-command.ts'
import createLoja from '../../lib/services/Create/create-loja.ts'
import CadastrarLoja from '../../components/CadastrarLoja/CadastrarLoja.tsx'
import getFaturaDiaria from '../../lib/services/Get/get-fatura.ts'
import getFaturaMensal from '../../lib/services/Get/get-fatura-mensal.ts'
import getVendas from '../../lib/services/Get/get-sete-dias.ts'
import Ocorrencias from '../../components/Alerta/Alerta.tsx'
import ActionHistory from '../../components/ActionHistory/ActionHistory.tsx'

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
  const [mostSeller, setMostSeller] = useState<ProdutoResult>()
  const [openCriar, setOpenCriar] = useState(false)
  const [faturaDiaria, setFaturaDiaria] = useState(0)
  const [faturaMensal, setFaturaMensal] = useState(0)
  const [vendas7dias, setVendas7dias] = useState([])

  const nome = JSON.parse(sessionStorage.getItem('userData') ?? '{}').nome
  const token = sessionStorage.getItem('sessionToken')

  const nomeProduto = mostSeller?.produto?.nome ?? 'N/A'

  const getMostSeller = async () => {
    if (!mostSeller) {
      await getMostSellerProduct(token)
        .then((response) => {
          setMostSeller(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    getMostSeller()
  }, [mostSeller])

  const handleOpenCriar = () => {
    setOpenCriar(!openCriar)
  }

  const getFaturaDoDia = async () => {
    if (!faturaDiaria) {
      await getFaturaDiaria(token)
        .then((res) => {
          setFaturaDiaria(res)
        })
    }
  }

  useEffect(() => {
    getFaturaDoDia()
  }, [faturaDiaria])

  const getFaturaDoMes = async () => {
    if (!faturaMensal) {
      await getFaturaMensal(token)
        .then((res) => {
          setFaturaMensal(res)
        })
    }
  }

  useEffect(() => {
    getFaturaDoMes()
  }, [faturaMensal])

  const getVendas7dias = async () => {
    if (!vendas7dias.length) {
      await getVendas(token)
        .then((res) => {
          console.log(res)
          setVendas7dias(res)
        })
        .catch((e) => {
          console.error('Erro ao tentar obter vendas', e)
        })
    }
  }

  useEffect(() => {
    getVendas7dias()
  }, [vendas7dias])


  const validateFatura = faturaMensal > faturaDiaria ? 'text-red-500' : 'text-purple-500'

  return (
    <>
      <div className='bg-slate-200 flex flex-col justify-center items-center'>
        <Helmet>
          <title>Painel de {nome} | Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
        </Helmet>
        <Header name={nome} />
        <div className='w-[90%] h-[80%] flex flex-col gap-4 justify-center items-center py-[2%]'>
          <div className='bg-slate-100 w-full rounded-xl shadow-md h-14 flex justify-center items-center p-4'>
            <Paragraph size='h2'>Visão Geral da Loja</Paragraph>
          </div>

          <div className='flex flex-row gap-4 justify-center w-full h-full'>
            <div className='flex flex-col gap-4 w-full'>
              <div className='w-full flex flex-row gap-4 justify-between items-center'>
                <Kpi value={nomeProduto} title='Produto mais vendido' />
                <Kpi value={`R$ ${faturaMensal && faturaMensal[0].toFixed(2).replace('.', ',')}` ?? 'R$ 0,00'} title='Fatura mensal' className={validateFatura} />
                <Kpi value={`R$ ${faturaDiaria && faturaDiaria.toFixed(2).replace('.', ',')}` ?? 'R% 0,00'} title='Fatura diária' className={validateFatura} />
              </div>

              <LineChartComponent lastSevenDaysSales={vendas7dias} />
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
