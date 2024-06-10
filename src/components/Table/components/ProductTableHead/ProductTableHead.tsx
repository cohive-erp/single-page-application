import React from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paragraph from '../../../Paragraph/Paragraph'

function ProductTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align='right'><Paragraph size='h4'>ID</Paragraph></TableCell>
        <TableCell align='left'><Paragraph size='h4'>Nome</Paragraph></TableCell>
        <TableCell align='right'><Paragraph size='h4'>Categoria</Paragraph></TableCell>
        <TableCell align='right'><Paragraph size='h4'>Valor Unitário (R$)</Paragraph></TableCell>
        <TableCell align='right'><Paragraph size='h4'>Quantidade</Paragraph></TableCell>
        <TableCell align='center'><Paragraph size='h4'>Ação</Paragraph></TableCell>
      </TableRow>
    </TableHead>
  )
}

export default ProductTableHead
