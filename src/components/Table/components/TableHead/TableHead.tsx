import React from 'react'

type TableHeadProps = {
  heads?: string[]
}

function TableHead(props: TableHeadProps) {
  const { heads } = props

  return (
    <thead>
      <tr>
        <th></th>
        {heads && heads.map((head) => (
          <th>{head}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
