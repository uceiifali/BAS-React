export const TableCell = ({children,textColor="white",cellClassName,...props}) => {
    return (
      <td
      style={{
          color: textColor,
      }}
      className={`text-[10px] border-none min-w-[50px] p-2  ${cellClassName? cellClassName: ""}`}
      {...props}
      >
        {children}
      </td>
    );
  };