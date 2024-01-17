import React from "react";
import DataTable from "react-data-table-component";
const customStyles = {
  rowsCells: {
    style: {
      backGroundColor: "#1E1E2D",
    },
  },
  headCells: {
    style: {
      backGroundColor: "#34344D",
    },
  },

  cells: {},
};
const DataTableComponent = ({ className, columns, data, title }) => {
  return (
    <>
      <DataTable
        title={title}
        columns={columns}
        data={data}
        className={className}
        pagination
        striped={true}
        customStyles={customStyles}
      />
    </>
  );
};

export default DataTableComponent;
