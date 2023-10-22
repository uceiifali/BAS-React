import React from 'react'

import DataTable from 'react-data-table-component';
const DataTableComponent = ({ columns, data ,title}) => {
    return (
        <DataTable
            title={title}
            columns={columns}
            data={data}

        />
    )
}

export default DataTableComponent