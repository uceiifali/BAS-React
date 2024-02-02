import Table from 'react-bootstrap/Table';

export default function CustomTable({columns,data}) {
  console.log("data: " , data);
  return (
    <>
    <Table striped bordered hover responsive>
      <thead className="bg-[#151521] border !border-[#efaa207f]">
        <tr>
            {
                columns?.map(({name},index)=> (
                    <th className="text-end text-[11px] border-none !font-semibold p-2 !text-[#EFAA20]">{name}</th>
                ))
            }
        </tr>
      </thead>
      <tbody>
        {
          (data && data.length > 0)  ?
            data.map(({id,projectName,projectType,projectPlace,clientType,DeliverDate,status,owner,view},index)=>(
            <tr className={`my-2 border !border-[#efaa207f] ${index % 2 === 0 ? "bg-[#151521]" : ""}`} key={index}>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-[#ffffff7f]">{id}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{projectName}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{projectType}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{projectPlace}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{clientType}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{DeliverDate}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{status}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{owner}</td>
                <td className="text-[10px] border-none min-w-[50px] p-2 !text-white">{view}</td>
              </tr>)) : null
        }
        

      </tbody>
    </Table>
    {
          (data && data.length === 0) ? 
          (
            <div  className='text-center'>
              <p  className="w-full text-center text-xl border-none min-w-[50px] p-2 !text-[#ffffff7f]"> 
            لا يوجد بيانات لعرضها </p>
            </div>
          ): null
        }
    </>
  );
}
