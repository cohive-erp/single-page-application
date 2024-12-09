import React from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paragraph from '../../../Paragraph/Paragraph'
import { useTranslation } from 'react-i18next'

function ProductTableHead() {
  const { t } = useTranslation()
  return (
    <TableHead>
      <TableRow className='w-full'>
        <TableCell className='w-[20%]' align='left'><Paragraph size='h4'>{t('NameProduct')}</Paragraph></TableCell>
        <TableCell align='left'><Paragraph size='h4'>{t('Category')}</Paragraph></TableCell>
        <TableCell className='w-[20%]' align='right'><Paragraph size='h4'>{t('UnitPrice')} (R$)</Paragraph></TableCell>
        <TableCell align='right'><Paragraph size='h4'>{t('Quantity')}</Paragraph></TableCell>
        <TableCell align='center'><Paragraph size='h4'>{t('Action')}</Paragraph></TableCell>
      </TableRow>
    </TableHead>
  )
}

export default ProductTableHead
