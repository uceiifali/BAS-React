import React from 'react'

import DataTable from 'react-data-table-component';
const DataTableComponent = ({className , columns, data ,title}) => {
    return (
        <>
        <DataTable
            title={title}
            columns={columns}
            data={data}
            className={className}
            striped={true}
 
        />

        </>
    )
}

export default DataTableComponent