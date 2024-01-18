import React from "react";
import DataTable from "react-data-table-component";
const customStyles = {
  rows: {
    style: {
      backgroundColor: "#34344D",
      color: "#FFF",
    },
    selectedHighlightStyle: {
      // use nth-of-type(n) to override other nth selectors
      "&:nth-of-type(n)": {
        color: "#EFAA20",
        backgroundColor: "#EFAA20",
        borderBottomColor: "#EFAA20",
      },
    },
    stripedStyle: {
      color: "#FFF",
      backgroundColor: "#1E1E2D",
    },
  },

  headCells: {
    style: {
      backgroundColor: "#34344D",
      color: "#FFF",
    },
  },

  pagination: {
    style: {
      backgroundColor: "#34344D",
      color: "#FFF",
    },
  },
};

const DataTableComponent = ({ className, columns, data, title }) => {
  return (
    <>
      <DataTable
        sortIcon
        title={title}
        columns={columns}
        data={data}
        striped={true}
        className={className}
        customStyles={customStyles}
      />
    </>
  );
};

export default DataTableComponent;
